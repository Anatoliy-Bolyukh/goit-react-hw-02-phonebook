import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import React, {Component} from 'react'
import { nanoid } from 'nanoid'

class ContactForm extends Component {
  state = {
    name: '',
    number: '',

  };

  handleChange = event => {
    const { name, value } = event.currentTarget

    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault()

    // console.log(this.props.addContacts);
    this.props.addContacts({...this.state, id: nanoid()})
    this.reset()
  };

  reset = () => {
    this.setState({ name: '', number: ''})
  };


  render() { 
    return (
       <div>
        <h1>Phonebook</h1>
        <h2>Name</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Імя{' '}
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          
        
          <label>
            Номер <input 
              type="tel"
              value={this.state.number}
              onChange={this.handleChange}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </form>

        <h2>Contacts</h2>

      </div>
    );
  }
}
 
export default ContactForm;