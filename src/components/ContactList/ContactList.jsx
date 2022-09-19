import App from "components/App";

const ContactList = ({ contactsList, deleteContact }) => {
  // console.log(addContacts);
  return (
    <div>
      <ul>
        {contactsList().map(({ id, name, number }) => (
            <li key={id}>
                <p>{name}: {number}</p>
                
            <button onClick={() => deleteContact(id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
