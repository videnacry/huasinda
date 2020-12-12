import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {

    return(
        <nav className="header-c">
            <h2>HUASINDA</h2>
            <div>
                <Link to='/'><button className='btn'>Home</button></Link>
                <Link to='webinars'><button className='btn'>Webinars</button></Link>
                <button className='btn'>About Us</button>
            </div>
        </nav>
    )
}

export default Header