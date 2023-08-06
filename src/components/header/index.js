import { useContext } from 'react'
import Context from '../../context'

import './index.css'
import {ReactComponent as LogoSvg} from './logo.svg'

const Header = ({isAbsolute=false, isFixed=false}) => {

    const context = useContext(Context)

    return(
        <>
            {!!isAbsolute&&!!isFixed&&<div className='header-c-space'></div>}
            <nav className={`header-c ${isAbsolute&&'absolute'} ${isFixed&&'fixed'}`}>
                <LogoSvg onClick={() => context.goHome()} fill="#363636"/>
                <div>
                    <a onClick={() => context.goOffer()}>Taller</a>
                    <a onClick={() => context.goModules()}>Módulos</a>
                    <a onClick={() => context.goProjects()}>Proyectos</a>
                    <a onClick={() => context.goAboutUs()}>Nosotros</a>
                </div>
            </nav>
        </>
    )
}

export default Header