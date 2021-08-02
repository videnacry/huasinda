import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

import Header from '../components/header'
import Greeting from './greeting'
import Webinars from '../components/webinars'
import Summary from './summary'
import Price from './price'
// import LeaveComment from '../components/leaveComment'
import Footer from '../components/footer'
import './webinar.css'

import complete_outsie from '../img/rectangle/complete_outside.jpg'
import wall_ceiling_window from '../img/rectangle/wall_ceiling_window.jpg'

const Webinar = (props) => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const lines = ['HUASINDA los invita a participar del programa:',
    '¨Creación de entornos Bio Regenerativos: Una visión desde la Permacultura y la Bioconstrucción¨',
    'Compuesto por 14 webinars.',
    'Duración: 3hs cada webinar.']

    
    const dates = ['22-12-2020', '24-12-2020', '26-12-2020', '28-12-2020']
    
    return(
        <div className='webinar-p'>
            <Header/>
            <div className='header-space'></div>
            <Webinars dates={dates}/>
            <Greeting start='22/12/2020' end='28/12/2020' title='Creación de entornos BIO Regenerativos' msg='Desde el 19 de Octubre al 2 de Diciembre todos los lunes y miercoles.'/>
            <Summary img={complete_outsie} lines={lines}/>
            <section className='schedule'>
                <h1>**HORARIOS**</h1>
                <p>URU | ARG | CHI | BRA : 18 hs.</p>
                <p>BOL |PAR | VEN |DOM : 17 hs.</p>
                <p>ECU |PER | COL | PAN | MEX : 16 hs.</p>
                <p>CENTROAMERICA: 15 hs</p>
            </section>
            <Price/>
            <section className='schedule'>
                <h1>**WEBINARS**</h1>
                {props.webinars.map(webinar => (
                    <Link to={webinar.date}><p>{webinar.title}</p></Link>
                ))}
            </section>
            <img className='img' src={wall_ceiling_window}/>
            {/* <div className='leave-comment'><LeaveComment/></div> */}
            {/* <div className='footer-space'></div> */}
            <Footer/>
        </div>
    )
}

export default Webinar