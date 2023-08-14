import { useContext, useState } from 'react'

import Box from '../../../components/styled/box'
import Spheres from './spheres'
import ModalModules from './modal-modules'
import './index.css'
import { ReactComponent as CartSvg } from './cart.svg'
import { ReactComponent as StackSvg } from './stack.svg'

import img from './wall_window_cealing_plant.jpg'

const Price = (props) => {

    const [isVisibleModalModules, setIsVisibleModalModules] = useState(false)
    const toggleIsVisibleModalModules = () => setIsVisibleModalModules(prev => prev ? false : true)

    const max = <div style={{margin:'0 30px'}}><h4>4 horas al día, por 4 findes!</h4></div>
    const mid = <div style={{margin:'0 30px'}}><h4>Refrigerio incluido!</h4></div>
    const min = <div style={{margin:'0 30px'}}><h4>Reserva por 30usd!</h4></div>

    return(
        <section className='price-c'>
            <div className='title'>
                <div className='background'>
                    <Box style={{width: '100%', height: '100%', left: '0'}}/>
                </div>
                <h1>**OFERTA**</h1>
            </div>
            <div className='box-left'>
                <Box style={{width: '100%', height: '100%', left: '0'}}/>
            </div>
            <div className='box-right'>
                <Box style={{width: '100%', height: '100%', left: '0'}}/>
            </div>
            <div className='line-dark'>
                <Box dark style={{width: '100%', height: '100%', left: '0'}}/>
            </div>
            <div className='spheres'>
                <div className='max'><Spheres text={max}/></div>
                <div className='mid'><Spheres text={mid}/></div>
                <div className='min'><Spheres text={min}/></div>
                <div className='img' style={{backgroundImage: 'url(' + img + ')'}}/>
            </div>
            <a onClick={props.goCheckout} className="btn-big btn-buy"><CartSvg className='svg' height='1.2em' width='1.2em'/>Comprar</a>
            <button className="btn-big btn-modules" onClick={toggleIsVisibleModalModules}>
                <StackSvg className='svg' height='1.2em' width='1.2em'/>Módulos
            </button>
            <div className='space'></div>
            {isVisibleModalModules ? <ModalModules modules={props.modules} toggleIsVisible={toggleIsVisibleModalModules}/> : ''}
        </section>
    )
}
export default Price