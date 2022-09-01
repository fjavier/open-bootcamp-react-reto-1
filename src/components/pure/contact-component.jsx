import React from 'react'
import PropTypes from 'prop-types'
import ContactModel from '../../models/contact-model'

function ContactComponent({contact}) {
  return (
    <div>
        <h2>Nombre: {contact.nombre}</h2>
        <h2>Apellido: {contact.apellido}</h2>
        <h2>email: {contact.email}</h2>
        <h2>Conectado: {contact.isConnected ? "Si"  : "No"}</h2>
    </div>
  )
}

ContactComponent.propTypes = {
    contact : PropTypes.instanceOf(ContactModel)
}

export default ContactComponent
