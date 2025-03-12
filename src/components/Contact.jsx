function Contact({ id, name, number, onDelete }) {
    return (
      <li style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div>
          <p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <img src="/Vector.svg" alt="user icon" /> {name}
          </p>
          <p style={{ display: "flex", alignItems: "center", gap: "5px" }}>
            <img src="/Vector (1).svg" alt="phone icon" /> {number}
          </p>
        </div>
        <button onClick={() => onDelete(id)}>Delete</button>
      </li>
    );
  }
  
  export default Contact;