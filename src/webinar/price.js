import React from 'react'
import {Link} from 'react-router-dom'

import Spheres from './spheres'
import './price.css'

import img from '../img/rectangle/wall_window_cealing_plant.jpg'

const Price = () => {
    const max = <div style={{margin:'0 30px'}}><p><span>14</span> webinars</p><p>Total U$S 238</p></div>
    const mid = <div style={{margin:'0 30px'}}><p><span>3</span> webinars or more</p><p>- U$S 18 c/u -</p></div>
    const min = <div style={{margin:'0 30px'}}><p><span>1</span> or <span>2</span> webinars</p><p>- U$S 20 c/u -</p></div>

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