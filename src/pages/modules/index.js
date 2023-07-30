import { useContext } from 'react'
import Context from '../../context'

import './index.css'
import Indexer from './indexer'
import navModule from './indexer/nav-module'
import Webinars from '../../components/webinars'
import Workshop from './workshop'



const Index = ({moduleIdx=-1}) => {

    const context = useContext(Context)
    const modules = context.modules.map(el => {
        return {
            ...el, clickHandler: () => el.go(context.setState)
        }
    })

    const navModules1 = Array.from({length:4}, (el, idx) => {
        const module = {...navModule}
        module.title = modules[idx].title
        module.blackBtn = {...navModule.blackBtn}
        module.greenBtn = {...navModule.greenBtn}
        module.blackBtn.clickHandler = modules[idx].clickHandler
        return module
    })
    const navModules2 = Array.from({length:3}, (el, idx) => {
        const module = {...navModule}
        module.title = modules[idx+4].title
        module.blackBtn = {...navModule.blackBtn}
        module.greenBtn = {...navModule.greenBtn}
        module.blackBtn.clickHandler = modules[idx+4].clickHandler
        return module
    })
    const pdfButton = {...navModule}
    pdfButton.title = 'Visualizar y editar pdf'
    pdfButton.colored = true
    pdfButton.blackBtn = {...navModule.blackBtn}
    pdfButton.greenBtn = {...navModule.greenBtn}
    
    navModules2.unshift(pdfButton)


    return(
        <div className='modules-p'>
            <div className='space'/>
            <Webinars modules={modules}/>
            <div className='contents'>
                <div className="index-nav">
                    <Indexer modules={navModules1} bgHoleColor='rgba(249, 249, 249, 1)'/>
                </div>
                <div className='document'>
                    <Workshop moduleIdx={moduleIdx}/>
                </div>
                <div className='index-nav'>
                    <Indexer modules={navModules2} isLeft bgHoleColor='rgba(249, 249, 249, 1)'/>
                </div>
            </div>
        </div>
    )
}

export default Index