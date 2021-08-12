import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'

import Greeting from './greeting'
import Webinars from '../components/webinars'
import Summary from './summary'
import Price from './price'
// import LeaveComment from '../components/leaveComment'
import './webinar.css'

import complete_outsie from '../img/rectangle/complete_outside.jpg'
import wall_ceiling_window from '../img/rectangle/wall_ceiling_window.jpg'

const Webinar = (props) => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const lines = ['Aquaterra los invita a participar del programa:',
    '¨Creación de entornos Bio Regenerativos: Una visión desde la Permacultura y la Bioconstrucción¨',
    'Compuesto por 9 módulos.']

    
    return(
        <div className='webinar-p'>
            <div className='header-space'></div>
            <Webinars modules={props.modules}/>
            <Greeting start='22/12/2020' end='28/12/2020' title='Creación de entornos BIO Regenerativos' msg='Accede a nuestro contenido para Fomentar y promover el aprendizaje de técnicas de bioconstrucción '/>
            <Summary img={complete_outsie} lines={lines}/>
            <section className='schedule'>
                <h1>**Talleres los fines de semana**</h1>
                <p>URU | ARG | CHI | BRA : 10 - 14hs {'&'} 16 - 20hs. </p>
                <p>BOL |PAR | VEN |DOM : 9 - 13hs {'&'} 15 - 19hs. </p>
                <p>ECU |PER | COL | PAN | MEX : 8 - 12hs. {'&'} 14 - 18hs. </p>
                <p>CENTROAMERICA: 7 - 11hs {'&'} 13 - 17hs. </p>
            </section>
            <Price/>
            <Summary img={wall_ceiling_window} lines={props.modules.map(webinar => <Link className='btn-green' to={`/${webinar.topic}`}>{webinar.title}</Link>)} title='**Módulos**'/>
            {/* <div className='leave-comment'><LeaveComment/></div> */}
        </div>
    )
}

export default Webinar