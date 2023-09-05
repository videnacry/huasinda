import Box from '../box'
import './index.css'
import logoSrc from './logo.jpg'
import facebookSvgSrc from './facebook.svg'
import instagramSvgSrc from './instagram.svg'

const Footer = () => {

    return(
        <div className="footer-c">
            <Box absolute style={{width: '100%', height: '100%', top: '15%'}}/>
            <Box dark absolute style={{width: '100%', height: '40px', top: '15%'}}/>
            <div className='spheres'>
                <div className='sphere-small'>
                    <div className='image'>
                        <img src={facebookSvgSrc} alt='facebook icon link'/>
                    </div>
                </div>
                <div className='sphere-big'>
                    <div className='image'>
                        <img src={logoSrc} alt='bioedifica logo of a panda'/>
                    </div>
                </div>
                <div className='sphere-small'>
                    <div className='image'>
                        <img src={instagramSvgSrc} alt='instagram icon link'/>
                    </div>
                </div>
            </div>
            <div className='contact'>
                <a href='mailto:bioedifica@gmail.com'>bioedifica@gmail.com</a>
                <a href='tel:+593 96 138 5672'>TEL: +593 96 138 5672</a>
            </div>
        </div>
    )
}

export default Footer;