
// import React, { Component } from 'react';


const ContactForm = ({ handleChange, handleSubmit }) => {


return (
      <div>
        <form 
      onSubmit={e =>{handleSubmit(e)}}>
          <label>
            Імя{' '}
            <input
              type="text"
              // value={this.state.name}
              onChange={e =>{handleChange(e)}}
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>

          <label>
            Номер{' '}
            <input
              type="tel"
              // value={this.state.number}
              onChange={e =>{handleChange(e)}}
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>

          <button type="submit">Add contact</button>
        </form>
      </div>
    );
}


  
export default ContactForm;
