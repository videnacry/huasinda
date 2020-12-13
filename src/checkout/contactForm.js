import React from 'react'
import './contactForm.css'

import terrain from '../img/rectangle/terrain.jpg'

const ContactForm = () => {
    const style = {
        backgroundImage: 'url("' + terrain + '")'
    }

    return(
        <section className="contact-form-s">
            <div className="space">
            </div>
            <img className="img" style={style} />
            <form className="form">
                <h1>**Datos de contacto**</h1>
                <fieldset className="fieldset">
                    <label for="name">Nombre</label>
                    <input id="name" type="text" className="input" />
                </fieldset>
                <fieldset className="fieldset">
                    <label for="lastnames">Apellidos</label>
                    <input id="lastnames" type="text" className="input" />
                </fieldset>
                <fieldset className="fieldset">
                    <label for="email">Correo electrónico</label>
                    <input id="email" type="text" className="input" />
                </fieldset>
                <fieldset className="fieldset">
                    <label for="telephone">Número de teléfono</label>
                    <input id="telephone" type="text" className="input" />
                </fieldset>
            </form>
        </section>
    )
}

export default ContactForm