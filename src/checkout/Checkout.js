import React, {useEffect, useState} from 'react'
import './Checkout.css'

import Header from '../components/header'
import Webinars from '../components/webinars'
import ContactForm from './contactForm'
import Cart from './cart'
import Payment from './payment'
import Footer from '../components/footer'

const Checkout = (props) => {

    const [cart, setCart] = useState([])
    const [price, setPrice] = useState(0)

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const lines = ['HUASINDA los invita a participar del programa:',
    '¨Creación de entornos Bio Regenerativos: Una visión desde la Permacultura y la Bioconstrucción¨',
    'Compuesto por 14 webinars.',
    'Duración: 3hs cada webinar.']

    
    const dates = ['22-12-2020', '24-12-2020', '26-12-2020', '28-12-2020']
    
    return(
        <article class="checkout-p">
            <Header />
            <div className='header-space'></div>
            <Webinars dates={dates}/>
            <header class="header">
                <h1 class="title">CHECKOUT</h1>
                <p class="msg">Con tus datos de compra te informaremos sobre el estado del webinar que compres</p>
            </header>
            <ContactForm />
            <Cart webinars={props.webinars} setCart={setCart} cart={cart} setPrice={setPrice}/>
            <Payment price={price} />
            <Footer />
        </article>
    )
}

export default Checkout