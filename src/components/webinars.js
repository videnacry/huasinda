import React from 'react'
import './webinars.css'
import materials from '../img/rectangle/materials.jpg'
import cover_wall from '../img/rectangle/cover_wall.jpg'
import half_wall_ceiling from '../img/rectangle/half_wall_ceiling.jpg'
import wall_ceiling_window from '../img/rectangle/wall_ceiling_window.jpg'

const Webinars = () => {

    return(
        <nav className='webinars-c'>
            <div className='webinar'>
                <div className='img' style={{backgroundImage: 'url(' + materials + ')'}}></div>
                <time className='date'>22-12-2020</time>
            </div>
            <div className='webinar'>
                <div className='img' style={{backgroundImage: 'url(' + half_wall_ceiling + ')'}}></div>
                <time className='date'>24-12-2020</time>
            </div>
            <div className='webinar'>
                <div className='img' style={{backgroundImage: 'url(' + cover_wall + ')'}}></div>
                <time className='date'>26-12-2020</time>
            </div>
            <div className='webinar'>
                <div className='img' style={{backgroundImage: 'url(' + wall_ceiling_window + ')'}}></div>
                <time className='date'>28-12-2020</time>
            </div>
        </nav>
    )
}

export default Webinars