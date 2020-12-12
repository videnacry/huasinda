import React from 'react'
import {Link} from 'react-router-dom'

import './webinars.css'

const Webinars = () => {

    return(
        <div className='webinars-s'>
            <div className='white'></div>
            <div className='gray'></div>
            <div className='article'>
                <Link to="/webinars" className='title'><h1>WEBINARS</h1></Link>
                <div className='img'></div>
                <div className='top-divisor'></div>
                <div className='bottom-divisor'></div>
                <Link to="/webinars" className='link'><h2>más información!</h2></Link>
            </div>
        </div>
    )
}

export default Webinars