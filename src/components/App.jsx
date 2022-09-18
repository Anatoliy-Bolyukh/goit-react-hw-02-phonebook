import { render } from '@testing-library/react';
import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import { nanoid } from 'nanoid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContacts = newContacts => {
    this.setState(prev => ({
      contacts: [...prev.contacts, newContacts],
    }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  visibleContactList = () => {
    const { contacts, filter } = this.state

    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter)
    )
  };

  render() {
    const visibleContact = this.visibleContactList()
    return (
      <>
        <ContactForm addContacts={this.addContacts} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          contactsFilter={visibleContact}
          addContacts={this.state.contacts}
        />
      </>
    );
  }
}

export default App;
