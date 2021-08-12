import './index.css'
import { Link } from 'react-router-dom'
import {ReactComponent as LogoSvg} from './logo.svg'

const Header = () => {

    return(
        <nav className="header-c">
            <LogoSvg fill="#363636"/>
            <div>
                <Link to='/'>Inicio</Link>
                <Link to='/modules'>Módulos</Link>
                <Link to='/projects'>Proyectos</Link>
                <Link to='/about-us'>Acerca de</Link>
            </div>
        </nav>
    )
}

export default Header