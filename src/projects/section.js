import React from 'react'
import {Link} from 'react-router-dom'

import './section.css'

const Section = ({title, link, imgSrc}) => {

    return(
        <div className='section-s'>
            <div className='white'></div>
            <div className='gray'></div>
            <div className='article'>
                <Link to={link} className='title'><h1>{title}</h1></Link>
                <div className='img' style={{backgroundImage: `url(${imgSrc})`}}></div>
                <div className='top-divisor'></div>
                <div className='bottom-divisor'></div>
                {link ? <Link to={link} className='link'><h2>más información!</h2></Link> : ''}
            </div>
        </div>
    )
}

export default Section