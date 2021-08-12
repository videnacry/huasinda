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
        props.setPrice(cartCount * 60)
    }
    
    return(
        <section className="cart-s">
            <h1 className="title">**Bolsa**</h1>
            <p className="msg">¡Agrega los módulos con un clic sobre su título!</p>
            {props.modules.map(module => (
                <fieldset className="product">
                    <input id={'cart_'+module.title} type="checkbox" className="checkbox" onChange={updateCart}/>
                    <label>{module.title}</label>
                    <label for={'cart_'+module.title} className="container">
                        <div style={{width: '100%',height: '100%'}}></div>
                    </label>
                </fieldset>
            ))}
        </section>
    )
}

export default Cart