import Box from '../box'
import './index.css'

const Footer = () => {

    return(
        <div className="footer-c">
            <Box absolute style={{width: '100%', height: '100%'}}/>
            <div className='spheres'>
                <div className="frame-brown">   
                    <Box dark fill/>
                </div>
                <a href='mailto:bioedifica@gmail.com'>bioedifica@gmail.com</a>
                <div className='sphere-small' />
                <div className='sphere-big' />
                <div className='sphere-small' />
                <a href='tel:+593 96 138 5672'>TEL: +593 96 138 5672</a>
            </div>
        </div>
    )
}

export default Footer;