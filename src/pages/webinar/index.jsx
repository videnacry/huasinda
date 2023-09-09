import React, {useContext, useEffect} from 'react'

import Greeting from './greeting'
import Webinars from '../../components/styled/webinars'
import Summary from './summary'
import Price from './price'
import './index.css'

import Context from '../../context'
import complete_outsie from './complete_outside.jpg'
import mapSrc from './map.png'
import eduSrc from './education.png'
import cloSrc from './workers.png'

const Webinar = () => {
    
    const context = useContext(Context)
    const modules = context.modules.map(el => {
        return {...el, clickHandler:() => el.go(context.setState), buyHandler:context.goCheckout}
    })
    useEffect(() => {
        window.scrollTo(0, 0)
        context.setHeaderState({})
      }, [])

    const boxes = {
        dark: {
            elmts: [
                <p>Aprende técnicas constructivas sustentables manteniendo el ecosistema intacto, y beneficiandolo con tratamientos de aguas residuales y paisajes acuáticos.'</p>
            ]
        },
        light: {
            elmts: [
                <h1>**Sugerencias**</h1>,
                <></>,
                <><img src={cloSrc} width='22px'/> Ponte tus guantes, cúbrete del sol o usa bloqueador!</>,
                <><img src={eduSrc} width='22px'/> Sin experiencia requerida! te certificamos!</>,
                <><img src={mapSrc} width='22px'/> Emprende una caminata por Lloa!</>
            ]
        }
    }

    
    return(
        <div className='webinar-p'>
            <Webinars modules={modules}/>
            <Greeting start='Agenda' end='Servicios' title='Creación de entornos BIO Regenerativos' msg=''/>
            <Summary img={complete_outsie} boxes={boxes}/>
            <div className='test'>
                <h2>*📆Fechas* :</h2>
                
                    {['30 Septiembre – 1 Octubre',
                    '7 Octubre – 8 Octubre',
                    '14 Octubre – 15 Octubre',
                    '21 Octubre – 22 Octubre',
                    '28 Octubre – 29 Octubre ',
                    '4 Noviembre - 5 Noviembre ',
                    '11 Noviembre - 12 Noviembre ',
                    '18 Noviembre - 19 Noviembre'].map(el => <span className='date'>{el}</span>)}
                
            </div>
            <div className='test'>
                <h2>
                    *🕜Horario* 
                </h2>
                <p>
                    09h00 – 13h00
                </p>
            </div>
            <Price modules={modules} goCheckout={() => context.goCheckout()}/>
        </div>
    )
}

export default Webinar