

import modules from '../modules-info'

import './index.css'
import Indexer from './indexer'
import navModule from './indexer/nav-module'
import Webinars from '../components/webinars'
import Taller from './taller'

const navModules1 = Array.from({length:4}, (el, idx) => {
    const module = {...navModule}
    module.title = modules[idx].title
    return module
})
const navModules2 = Array.from({length:3}, (el, idx) => {
    const module = {...navModule}
    module.title = modules[idx+4].title
    return module
})
const pdfButton = {...navModule}
pdfButton.title = 'Visualizar y editar pdf'
pdfButton.colored = true
navModules2.unshift(pdfButton)

const Index = () => {


    return(
        <div className='modules-p'>
            <div className='space'/>
            <Webinars modules={modules}/>
            <div className='contents'>
                <div className="index-nav">
                    <Indexer modules={navModules1} bgHoleColor='rgba(249, 249, 249, 1)'/>
                </div>
                <div className='document'>
                    <Taller />
                </div>
                <div className='index-nav'>
                    <Indexer modules={navModules2} isLeft bgHoleColor='rgba(249, 249, 249, 1)'/>
                </div>
            </div>
        </div>
    )
}

export default Index