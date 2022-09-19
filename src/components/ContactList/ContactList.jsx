const ContactList = ({ filterContact, deleteContact }) => {
  // console.log(addContacts);
  return (
    <div>
      <ul>
        {filterContact().map(({ id, name, number }) => (
            <li key={id}>
                <p>{name}: {number}</p>
                
            <button onClick={event=>deleteContact(id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
