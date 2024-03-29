import { Carousel, getPropsInstance } from '../../unstyled/carousel'
import Box from '../box'
import './index.css'
import links from './links'

const carouselProps = getPropsInstance()
carouselProps.tag = {element:'ul', class:'links'}
carouselProps.arrowLeft = {class:'btn-left', content:<>&lsaquo;</>}
carouselProps.arrowRight = {class:'btn-right', content:<>&rsaquo;</>}

const Links = () => {
    const pageLinks = links.slice(0, 4)
    const linksEl = pageLinks.map((link, idx) => (
        <li key={`link-${idx}`}>
            <Box dark fill absolute style={{top:0}}/>
            <a className="link" href={link.url}>
                <div className='img' style={{backgroundImage: 'url("' + link.img_path + '")'}}/>
                <h3>{link.name[0].toUpperCase() + link.name.substring(1)}</h3>
                <p>{link.content.substring(0, 45).trim() + '...'}</p>
            </a>
        </li>
    ))
    carouselProps.elements = linksEl
    return(
        <div className="links-c">
            <div className="box-green">
                <Box absolute fill/>
            </div>
            <h1>Enlaces Recomendados</h1>
            <Carousel props={carouselProps}/>
        </div>
    )
}

export default Links