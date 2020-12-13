import React, {useEffect, useState} from 'react'
import './cart.css'

const Cart = (props) => {
    const updateCart = e => {
        const webinarId = e.target.id
        const index = props.cart.findIndex(val => val === webinarId)
        if (index > -1) {
            props.cart.splice(index, 1)
        } else {
            props.cart.push(webinarId)
        }
        props.setCart(props.cart)
        setPrice()
    }
    const setPrice = () => {
        const cartCount = props.cart.length
        if (cartCount >= 3) {
            props.setPrice(cartCount * 18)
        } else if (cartCount < 3) {
            props.setPrice(cartCount * 20)
        } else {
            props.setPrice(238)
        }
    }
    
    return(
        <section className="cart-s">
            <h1 className="title">**Bolsa**</h1>
            <p className="msg">¡Agrega los webinars con un clic sobre su título!</p>
            {props.webinars.map(webinar => (
                <fieldset className="product">
                    <input id={'cart_'+webinar.title} type="checkbox" className="checkbox" onChange={updateCart}/>
                    <label>{webinar.title}</label>
                    <label for={'cart_'+webinar.title} className="container">
                        <div style={{width: '100%',height: '100%'}}></div>
                    </label>
                </fieldset>
            ))}
        </section>
    )
}

export default Cart