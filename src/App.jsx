import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import ContactForm from "./components/ContactForm";
import SearchBox from "./components/SearchBox";
import ContactList from "./components/ContactList";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

export default function App() {
  // Отримуємо контакти з localStorage при старті (якщо їх немає — використовуємо initialContacts)
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem("contacts");
    return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });

  const [filter, setFilter] = useState("");

  // Оновлюємо localStorage при кожній зміні контактів
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const deleteContact = (id) => {
    setContacts((prevContacts) => prevContacts.filter((contact) => contact.id !== id));
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const addContact = (values, { resetForm }) => {
    const newContact = { id: nanoid(), ...values };

    // Перевірка на дублікати
    if (contacts.some((contact) => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }

    setContacts((prevContacts) => [...prevContacts, newContact]);
    resetForm();
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <SearchBox filter={filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={deleteContact} />
    </div>
  );
}

