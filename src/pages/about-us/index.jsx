import './index.css'

import React, {useCallback, useContext, useEffect} from 'react'
import Jumbotron from '../../components/styled/jumbotron'
import jumbotronImgSrc from './jumbotron.webp'
import jumbotronDeskImgSrc from './jumbotron-desk.webp'
import Description from './description'
import Links from '../../components/styled/links'
import Context from '../../context'

import presentationMp4 from './presentation.mp4'
import missionImgSrc from './mission.jpg'
import visionImgSrc from './vision.jpg'

const About = () => {

    const context = useContext(Context)
    
    const mission = {
        title: 'Misión',
        description: 'Bioedifica nace como respuesta al incremento de la huella de carbono, lleva realizando proyectos que impulsen la economía circular y por ende el desarrollo sostenible.',
        lines: [
            'Nos encontramos en pleno crecimiento,',
            '¿te gustaría apoyar/unirte?',
            '¿más información?',
            '¿feedback, consejo?',
            '',
            '¡Escríbenos, por favor!',
            '',
            <a href='mailto:aquaterra@gmail.com' className='btn-green'>aquaterra@gmail.com</a>,
        ],
        startMsg: 'Atención al cliente todos los días, de 9:00 a 18:00 horas',
        endMsg: 'Nuestras oficinas y proyectos se encuentran en Lloa'
    }
    const vision = {
        title: 'Visión',
        description: 'Reducir la huella de carbono mediante la construcción responsable utilizando como protagonista al bambú, que alcanza la dureza máxima a los 3 años y es un gran sumidero de carbono.',
        lines: [
            'Además de tener proyectos de construcción, nuestro objetivo es formar profesionales.',
            '',
            '¿Te unes a la causa?',
            '',
            <a onClick={() => context.goOffer()} className='btn-green'>Información del curso</a>
        ],
        startMsg: '',
        endMsg: ''
    }
    
    useEffect(() => {
        window.scrollTo(0, 0)
        context.setHeaderState({isAbsolute:true})
      }, [])

    return(
        <div className='about-us-s'>
            {/* <div className='short-img'>
                <Jumbotron title="Sobre nosotros" message="" imgSrc={jumbotronImgSrc}/>
            </div>
            <div className='long-img'>
                <Jumbotron centerText title="Sobre nosotros" message="" imgSrcDuo={[jumbotronImgSrc, jumbotronDeskImgSrc]} style={{position:'absolute', top:'50%', left:0, transform: 'translateY(-50%)'}}/>
            </div> */}
            <Jumbotron isVideo={true} videoSrc={presentationMp4} videoType='video/mp4' title="Sobre nosotros" message="" />
            <div className='info'>
                <Description mission title={mission.title} description={mission.description} dialog={mission.lines} imgSrc={missionImgSrc} startMsg={mission.startMsg} endMsg={mission.endMsg}/>
                <Description title={vision.title} description={vision.description} dialog={vision.lines} imgSrc={visionImgSrc} startMsg={vision.startMsg} endMsg={vision.endMsg}/>
            </div>
            <div className='space'></div>
            <Links/>
        </div>
    )
}

export default About;