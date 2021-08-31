import { useState } from 'react'
import {Link} from 'react-router-dom'

import Box from '../../components/box'
import Spheres from './spheres'
import ModalModules from './modal-modules'
import './index.css'
import { ReactComponent as CartSvg } from './cart.svg'
import { ReactComponent as StackSvg } from './stack.svg'

import img from '../../img/rectangle/wall_window_cealing_plant.jpg'

const Price = (props) => {
    const [isVisibleModalModules, setIsVisibleModalModules] = useState(false)
    const toggleIsVisibleModalModules = () => setIsVisibleModalModules(prev => prev ? false : true)

    const max = <div style={{margin:'0 30px'}}><h4><span>1</span> módulo</h4><h4>-Total USD 60-</h4></div>
    const mid = <div style={{margin:'0 30px'}}><h4><span>1</span> taller {'&'} módulo</h4><h4>-Total USD 150 -</h4></div>
    const min = <div style={{margin:'0 30px'}}><h4><span>1</span> taller</h4><h4>-Total USD 99 -</h4></div>

    return(
        <section className='price-c'>
            <div className='title'>
                <div className='background'>
                    <Box style={{width: '100%', height: '100%', left: '0'}}/>
                </div>
                <h1>**OFERTAS**</h1>
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
            <Link to="/checkout" className="btn-big btn-buy"><CartSvg height='1.2em' width='1.2em'/>Comprar</Link>
            <button className="btn-big btn-modules" onClick={toggleIsVisibleModalModules}>
                <StackSvg height='1.2em' width='1.2em'/>Módulos
            </button>
            <div className='space'></div>
            {isVisibleModalModules ? <ModalModules modules={props.modules} toggleIsVisible={toggleIsVisibleModalModules}/> : ''}
        </section>
    )
}
export default Price