import React, {useContext, useEffect, useState} from 'react'
import './index.css'

import Webinars from '../../components/webinars'
import ContactForm from './contactForm'
import Cart from './cart'
import Payment from './payment'
import Context from '../../context'

const Checkout = () => {

    const [cart, setCart] = useState([])
    const [price, setPrice] = useState(0)
    const context = useContext(Context)
    const modules = context.modules.map(el => {
        return {
            ...el, clickHandler: () => el.go(context.setState)
        }
    })

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
      
    return(
        <article class="checkout-p">
            <div className='header-space'></div>
            <Webinars modules={modules}/>
            <header class="header">
                <h1 class="title">CHECKOUT</h1>
                <p class="msg">Con tus datos de compra te informaremos sobre el estado del webinar que compres</p>
            </header>
            <ContactForm />
            <Cart modules={modules} setCart={setCart} cart={cart} setPrice={setPrice}/>
            <Payment price={price} />
        </article>
    )
}

export default Checkout