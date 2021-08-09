import {Link} from 'react-router-dom'
import Box from '../components/box'

import './webinars.css'
import webinarFirstSrc from './webinar-1.jpg'
import webinarSecondSrc from './webinar-2.jpg'

const Webinars = () => {

    return(
        <div className='webinars-s'>
            <p>GeaHabitat se especializa en la formación de profesionales en el ámbito de la edificación responsable a base del bambú.</p>
            <div className='article'>
                <Link to='./webinars' className='title'><h1>Webinars</h1></Link>
                <p className='pharagraph-right'>Donde estés...</p>
                <div className='black-line'>
                    <div className='frame-left'>
                        <div style={{backgroundImage: `url(${webinarSecondSrc})`}} className='img-left'/>
                    </div>
                    <div className='frame-center'>
                        <div className='white'/>
                    </div>
                    <div className='frame-right'>
                        <div style={{backgroundImage: `url(${webinarFirstSrc})`}} className='img-right'/>
                    </div>
                </div>
                <p className='pharagraph-left'>...con quien estés !!</p>
                <Link to='./webinars' className='link'>más info</Link>
            </div>
        </div>
    )
}

export default Webinars