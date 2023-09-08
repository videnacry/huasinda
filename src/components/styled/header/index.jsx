import { useContext, useEffect, useRef } from 'react'
import Context from '../../../context'

import './index.css'
import logoSrc from './logo.webp'

const Header = ({isAbsolute=false, isSticky=false}) => {
    const navRef = useRef({})

    const context = useContext(Context)
    useEffect(() => {
        document.onscroll = (e) => {
            if (window.scrollY > 0) 
                navRef.current.classList?.add('bg-white')
            else if (window.scrollY == 0)
                navRef.current.classList?.remove('bg-white')
        }
    }, [])

    return(
        <>
            {!!isAbsolute&&!!isSticky&&<div className='header-c-space'></div>}
            <div className={`container-header ${isSticky && 'absolute'}`}>
                <nav ref={ref => navRef.current = ref} className={`header-c ${isAbsolute&&'absolute'} ${isSticky&&'fixed'}`}>
                    <img alt="logo bioedifica" onClick={() => context.goHome()} src={logoSrc} />
                    <div>
                        <a onClick={() => context.goOffer()}>Taller</a>
                        <a onClick={() => context.goModules()}>Módulos</a>
                        <a onClick={() => context.goProjects()}>Proyectos</a>
                        <a onClick={() => context.goAboutUs()}>Nosotros</a>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Header