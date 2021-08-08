import React from 'react'
import './index.css'
import { Link } from 'react-router-dom'

const Header = () => {

    return(
        <nav className="header-c">
            <h2>GeaHabitat</h2>
            <div>
                <Link to='/'>Inicio</Link>
                <Link to='/webinars'>Webinars</Link>
                <Link to='/projects'>Proyectos</Link>
                <Link to='/about-us'>Acerca de</Link>
            </div>
        </nav>
    )
}

export default Header