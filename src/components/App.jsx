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

  // visibleContactList = () => {};

  filterContact = () => {
    if (this.state.filter === '') {
      return this.state.contacts;
    } else {
      const { contacts, filter } = this.state;

      const normalizedFilter = filter.toLowerCase();

      return contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      );
    }
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !==id)
    }))
  }

  render() {
    return (
      <>
        <ContactForm addContacts={this.addContacts} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <ContactList
          filterContact={this.filterContact}
          addContacts={this.state.contacts}
          deleteContact = {this.deleteContact}
        />
      </>
    );
  }
}

export default App;
