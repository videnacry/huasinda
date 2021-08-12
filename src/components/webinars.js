import React from 'react'
import {Link} from 'react-router-dom'

import './webinars.css'
import materials from '../img/rectangle/materials.jpg'
import cover_wall from '../img/rectangle/cover_wall.jpg'
import half_wall_ceiling from '../img/rectangle/half_wall_ceiling.jpg'
import wall_ceiling_window from '../img/rectangle/wall_ceiling_window.jpg'

const Webinars = (props) => { 
    console.log(props.modules)
    return(
        <nav className='webinars-c'>
            {/* <Link to={'/' + props.dates[0]} className='webinar'>
                <div className='img' style={{backgroundImage: 'url(' + materials + ')'}}></div>
                <time className='date'>{props.dates[0]}</time>
            </Link>
            <Link to={'/' + props.dates[1]} className='webinar'>
                <div className='img' style={{backgroundImage: 'url(' + half_wall_ceiling + ')'}}></div>
                <time className='date'>{props.dates[1]}</time>
            </Link>
            <Link to={'/' + props.dates[2]} className='webinar'>
                <div className='img' style={{backgroundImage: 'url(' + cover_wall + ')'}}></div>
                <time className='date'>{props.dates[2]}</time>
            </Link>
            <Link to={'/' + props.dates[3]} className='webinar'>
                <div className='img' style={{backgroundImage: 'url(' + wall_ceiling_window + ')'}}></div>
                <time className='date'>{props.dates[3]}</time>
            </Link> */}
            {props.modules.map(module => (
                <Link to={'/' + module.topic} className='webinar'>
                    <div className='img' style={{backgroundImage: 'url(' + module.icon + ')'}}></div>
                    <span>{module.topic}</span>
                </Link>         
            ))}
        </nav>
    )
}

export default Webinars