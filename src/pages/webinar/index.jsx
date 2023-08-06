import React, {useContext, useEffect} from 'react'

import Greeting from './greeting'
import Webinars from '../../components/webinars'
import Summary from './summary'
import Price from './price'
import './index.css'

import complete_outsie from './complete_outside.jpg'
import Context from '../../context'

const Webinar = () => {
    
    const context = useContext(Context)
    const modules = context.modules.map(el => {
        return {...el, clickHandler:() => el.go(context.setState)}
    })
    useEffect(() => {
        window.scrollTo(0, 0)
        context.setHeaderState({isFixed:true})
      }, [])

    const boxes = {
        dark: {
            elmts: [
                <p>Aquaterra los invita a participar del programa:'</p>,
                <p>¨Creación de entornos Bio Regenerativos: Una visión desde la Permacultura y la Bioconstrucción¨'</p>,
                <p>Compuesto por 9 módulos.'</p>
            ]
        },
        light: {
            elmts: [
                <h1>**Talleres los fines de semana**</h1>,
                <p>URU | ARG | CHI | BRA : 10 - 14hs {'&'} 16 - 20hs. </p>,
                <p>BOL |PAR | VEN |DOM : 9 - 13hs {'&'} 15 - 19hs. </p>,
                <p>ECU |PER | COL | PAN | MEX : 8 - 12hs. {'&'} 14 - 18hs. </p>,
                <p>CENTROAMERICA: 7 - 11hs {'&'} 13 - 17hs. </p>
            ]
        }
    }

    
    return(
        <div className='webinar-p'>
            <div className='header-space'></div>
            <Webinars modules={modules}/>
            <Greeting start='22/12/2020' end='28/12/2020' title='Creación de entornos BIO Regenerativos' msg=''/>
            <Summary img={complete_outsie} boxes={boxes}/>
            <Price modules={modules} goCheckout={context.goCheckout}/>
        </div>
    )
}

export default Webinar