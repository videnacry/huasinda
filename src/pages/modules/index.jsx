import { useContext, useState } from 'react'
import Context from '../../context'

import './index.css'
import Indexer from './indexer'
import navModule from './indexer/nav-module'
import Webinars from '../../components/webinars'
import Workshop from './workshop'
import IndexerMogile from './indexer/mobile'
import PdfViewerComponent from './pdfViewer'



const Index = ({moduleIdx=-1}) => {

    const context = useContext(Context)
    const [modalIsVisible, setModalIsVisible] = useState(false)
    const [pdfIsVisible, setPdfIsVisible] = useState(false)

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
    const navModules = [...navModules1, ...navModules2]
    const pdfButton = {...navModule}
    pdfButton.title = 'Visualizar y editar pdf'
    pdfButton.colored = true
    pdfButton.blackBtn = {...navModule.blackBtn}
    pdfButton.blackBtn.text = 'ok'
    pdfButton.blackBtn.clickHandler = () => setPdfIsVisible(true)
    pdfButton.greenBtn = {...navModule.greenBtn}
    pdfButton.greenBtn.isVisible = false
    
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
                <div className='index-nav-mobile'>
                    {modalIsVisible || pdfIsVisible || <button className="show-modal" onClick={() => setModalIsVisible((prev) => true)}>Módulos</button>}
                    {modalIsVisible || pdfIsVisible || <button className="show-pdf" onClick={pdfButton.blackBtn.clickHandler}>PDF</button>}
                    {modalIsVisible && <IndexerMogile modules={navModules} close={() => setModalIsVisible((prev) => false)}/>}
                </div>
            </div>
            {pdfIsVisible && <>
            <div className="pdf-viewer"><PdfViewerComponent document={'document.pdf'}/>
                <div className='bottom'/>
            </div> 
            <button className="hide_pdf-viewer" onClick={() => setPdfIsVisible(false)}>&times;</button>
            </>}
        </div>
    )
}

export default Index