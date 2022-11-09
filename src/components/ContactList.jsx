import { ContactPreview } from "./ContactPreview.jsx";
export function ContactList({ contacts }) {


  return (
    <section className="contacts-library">
      <ul className="contacts-list">
        {contacts.map(contact => (
          <li key={contact._id}>
            <ContactPreview contact={contact} key={contact._id} />
          </li> 
          ))}
      </ul>
    </section>
  );
}
