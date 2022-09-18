

const ContactList = ({ addContacts }) => {
    // console.log(addContacts);
    return ( 
        <div>
            <ul>
                {addContacts.map(({ id, name, number }) => (
                    <li key={id}>{name}: {number}</li>
                ))
                }
            </ul>
        </div>
     );
}
 
export default ContactList;