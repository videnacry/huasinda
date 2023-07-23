import React, { useEffect, useState } from 'react'
import './payment.css'

import materials from '../img/rectangle/materials.jpg'

const Payment = (props) => {

    return(
        <section className="payment-s">
            <div className="space"></div>
            <div className="blackbox">
                <h1 className="title">**Métodos de pago**</h1>
                <p >Transferencia a cuenta itaú Dólares: Nº 6726162.</p>
                <p >Depósito a tarjeta Mi Dinero Internacional CI: 3 484 906 -8, en dólares.</p>
            </div>
            <article className="msg">
                <h1>**Precio total**</h1>
                <h1>USD <span className="price">{props.price}</span></h1>
                <button className="btn">Enviar datos</button>
            </article>
            <img className="img" style={{backgroundImage: 'url("' + materials + '")'}}/>
        </section>
    )
}

export default Payment