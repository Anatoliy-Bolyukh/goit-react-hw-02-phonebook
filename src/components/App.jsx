import { render } from '@testing-library/react';
import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';

export class App extends Component {
  state = {
    contacts: [],
    name: '',
  };

  render() {
    return (
      <>
        <ContactForm />
      </>
    );
  }
}
