import { useContext } from 'react'
import Box from '../../components/box'
import projectFirstSrc from './project-1.jpg'
import projectSecondSrc from './project-2.jpg'

import './projects.css'
import Context from '../../context'

const Posts = () => {
    const context = useContext(Context)

    return(
        <div className='projects-s'>
            <p>A favor de la reducción de la huella de carbono y la economía circular, construimos estructuras amigables con el medio ambiente.</p>
            <div>
                <Box absolute style={{width: '80%', height: '52%', top: '0', left: '0'}}/>
                <Box absolute dark style={{width: '100%', height: '30px', top: 'calc(52%)', left: '0'}}/>
                <a onClick={() => context.goProjects()}><h1 className='title'>Proyectos</h1></a>
                <p className='pharagraph-left'>Esqueleto de bambú y relleno de tierra...</p>
                <div className='frame-right'>
                    <div style={{backgroundImage: `url(${projectFirstSrc})`}} className='img-right'/>
                </div>
                <div className='frame-left'>
                    <div style={{backgroundImage: `url(${projectSecondSrc})`}} className='img-left'/>
                </div>
                <p className='pharagraph-right'>...diversas funciones, desde viviendas hasta invernaderos</p>
                <div className='link'><a onClick={() => context.goProjects()} className='btn-green'>más info</a></div>
            </div>
        </div>
    )
}

export default Posts