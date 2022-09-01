import React from 'react'
import PropTypes from 'prop-types'
import ContactComponent from './pure/contact-component';
import ContactModel from '../models/contact-model';

function ContactList(props) {
    const contact = new ContactModel("Francisco", "Briceño","correo@gmail.com", false);
  return (
    <div>
        <h1>Contacto:</h1>
        <ContactComponent contact={contact}/>
    </div>
    
  )
}

ContactList.propTypes = {}

export default ContactList;
