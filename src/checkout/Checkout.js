import React, {useEffect, useState} from 'react'
import './Checkout.css'

import Webinars from '../components/webinars'
import ContactForm from './contactForm'
import Cart from './cart'
import Payment from './payment'

const Checkout = (props) => {

    const [cart, setCart] = useState([])
    const [price, setPrice] = useState(0)

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
console.log(props.modules)
    return(
        <article class="checkout-p">
            <div className='header-space'></div>
            <Webinars modules={props.modules}/>
            <header class="header">
                <h1 class="title">CHECKOUT</h1>
                <p class="msg">Con tus datos de compra te informaremos sobre el estado del webinar que compres</p>
            </header>
            <ContactForm />
            <Cart modules={props.modules} setCart={setCart} cart={cart} setPrice={setPrice}/>
            <Payment price={price} />
        </article>
    )
}

export default Checkout