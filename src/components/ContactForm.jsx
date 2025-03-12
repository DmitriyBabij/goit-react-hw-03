import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(50, "Must be at most 50 characters")
    .required("Required"),
  number: Yup.string()
    .min(3, "Must be at least 3 characters")
    .max(50, "Must be at most 50 characters")
    .required("Required"),
});

export default function ContactForm({ onSubmit }) {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={contactSchema}
      onSubmit={onSubmit}
    >
      <Form style={{ display: "flex", flexDirection: "column", gap: "10px", width: "250px" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="name">Name</label>
          <Field id="name" type="text" name="name" />
          <ErrorMessage name="name" component="div" style={{ color: "red", fontSize: "12px" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="number">Number</label>
          <Field id="number" type="text" name="number" />
          <ErrorMessage name="number" component="div" style={{ color: "red", fontSize: "12px" }} />
        </div>

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}
