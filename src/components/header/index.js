import { useContext } from 'react'
import Context from '../../context'

import './index.css'
import {ReactComponent as LogoSvg} from './logo.svg'

const Header = () => {

    const context = useContext(Context)

    return(
        <nav className="header-c">
            <LogoSvg fill="#363636"/>
            <div>
                <a onClick={() => context.goHome()}>Inicio</a>
                <a onClick={() => context.goOffer()}>Módulos</a>
                <a onClick={() => context.goProjects()}>Proyectos</a>
                <a onClick={() => context.goAboutUs()}>Acerca de</a>
            </div>
        </nav>
    )
}

export default Header