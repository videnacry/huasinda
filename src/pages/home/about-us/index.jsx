import Box from '../../../components/styled/box'
import './index.css'

const AboutUs = () => {
    
    return (
        <div className="aboutus-s">
            <div className="line">
                <Box dark fill/>
            </div>
            <div className="img-vertical" />
            <div className="article">
                <div className="bg">
                    <Box fill />
                </div>
                <h1 className="title">Sobre Nosotros</h1>
                <p className="text">¿Te apetece saber quienes somos?</p>
                <div className="img-horizontal" />
                <div className="text">¿Compartes nuestra filosofía con respecto a la naturaleza?</div>
            </div>
            <div className="link">
                <a className="btn-brown-big">más info</a>
            </div>
        </div>
    )
    
}

export default AboutUs