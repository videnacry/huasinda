import {Link} from 'react-router-dom'

import Box from '../components/box'
import Spheres from './spheres'
import './price.css'

import img from '../img/rectangle/wall_window_cealing_plant.jpg'

const Price = () => {
    const max = <div style={{margin:'0 30px'}}><h4><span>1</span> módulo</h4><h4>-Total USD 60-</h4></div>
    const mid = <div style={{margin:'0 30px'}}><h4><span>1</span> taller {'&'} módulo</h4><h4>-Total USD 150 -</h4></div>
    const min = <div style={{margin:'0 30px'}}><h4><span>1</span> taller</h4><h4>-Total USD 99 -</h4></div>

    return(
        <section className='price-c'>
            <div className='title'>
                <Box absolute style={{width: '100%', height: '100%', left: '0'}}/>
                <h1>**OFERTAS**</h1>
            </div>
            <div className='spheres'>
                <div className='max'><Spheres text={max}/></div>
                <div className='mid'><Spheres text={mid}/></div>
                <div className='min'><Spheres text={min}/></div>
                <div className='img' style={{backgroundImage: 'url(' + img + ')'}}/>
            </div>
            <Link to="/checkout" className="btn">Comprar</Link>
            <div className='space'></div>
        </section>
    )
}

export default Price