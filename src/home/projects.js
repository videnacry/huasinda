import {Link} from 'react-router-dom'
import Box from '../components/box'
import projectFirstSrc from './project-1.jpg'
import projectSecondSrc from './project-2.jpg'
import './projects.css'

const Posts = () => {

    return(
        <div className='projects-s'>
            <p>A favor de la reducción de la huella de carbono y la economía circular, construimos estructuras amigables con el medio ambiente.</p>
            <div>
                <Box absolute style={{width: '80%', height: '55%', top: '0', left: '0'}}/>
                <Box radius dark style={{width: '100%', height: '30px', top: 'calc(55%)', left: '0'}}/>
                <Link to='/projects'><h1 className='title'>Proyectos</h1></Link>
                <p className='pharagraph-left'>Esqueleto de bambú y relleno de tierra</p>
                <div className='frame-right'>
                    <div style={{backgroundImage: `url(${projectFirstSrc})`}} className='img-right'/>
                </div>
                <div className='frame-left'>
                    <div style={{backgroundImage: `url(${projectSecondSrc})`}} className='img-left'/>
                </div>
                <p className='pharagraph-right'>Construcciones con diversas funciones, desde viviendas hasta invernaderos</p>
                <div className='link'><Link to='/projects' className='btn-green'>más info</Link></div>
            </div>
        </div>
    )
}

export default Posts