import Box from '../box'
import './index.css'
import logoSrc from './logo.jpg'
import facebookSvgSrc from './facebook.svg'
import instagramSvgSrc from './instagram.svg'

const Footer = () => {

    return(
        <div className="footer-c">
            <Box style={{width: '100%', borderRadius: '0', height: '100%', top: '15%'}}/>
            <Box dark style={{width: '100%', borderRadius: '0', height: '40px', top: '15%'}}/>
            <div className='spheres'>
                <div className='sphere-small'>
                    <div className='image'>
                        <img src={facebookSvgSrc} alt='facebook icon link'/>
                    </div>
                </div>
                <div className='sphere-big'>
                    <div className='image'>
                        <img src={logoSrc} alt='geahabitat logo of a panda'/>
                    </div>
                </div>
                <div className='sphere-small'>
                    <div className='image'>
                        <img src={instagramSvgSrc} alt='instagram icon link'/>
                    </div>
                </div>
            </div>
            <div className='contact'>
                <a href='mailto:geahabitat@gmail.com'>geahabitat@gmail.com</a>
                <a href='tel:+592 98 456 1233'>TEL: +592 98 456 1233</a>
            </div>
        </div>
    )
}

export default Footer;