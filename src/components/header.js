import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

const Header = () => {

    return(
        <nav className="header-c">
            <h2>Aquaterra</h2>
            <div>
                <Link to='/'><button className='btn'>Inicio</button></Link>
                <Link to='/webinars'><button className='btn'>Webinars</button></Link>
                <Link to='/projects'><button className='btn'>Proyectos</button></Link>
                <Link to='/about-us'><button className='btn'>Acerca de</button></Link>
            </div>
        </nav>
    )
}

export default Header