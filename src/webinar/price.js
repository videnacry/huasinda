import React from 'react'
import {Link} from 'react-router-dom'

import Spheres from './spheres'
import './price.css'

import img from '../img/rectangle/wall_window_cealing_plant.jpg'

const Price = () => {
    const max = <div style={{margin:'0 30px'}}><p><span>1</span> módulo</p><p>-Total USD 60-</p></div>
    const mid = <div style={{margin:'0 30px'}}><p><span>1</span> taller {'&'} módulo</p><p>-Total USD 150 -</p></div>
    const min = <div style={{margin:'0 30px'}}><p><span>1</span> taller</p><p>-Total USD 99 -</p></div>

    return(
        <section className='price-c'>
            <h1 className='title'>**OFERTAS**</h1>
            <div className='max'><Spheres text={max}/></div>
            <div className='mid'><Spheres text={mid}/></div>
            <div className='min'><Spheres text={min}/></div>
            <img className='img' style={{backgroundImage: 'url(' + img + ')'}}/>
            <Link to="/checkout" className="btn">Comprar</Link>
            <div className='space'></div>
        </section>
    )
}

export default Price