import React, {useEffect} from 'react'
import {Link} from 'react-router-dom'
import Jumbotron from '../components/jumbotron'
import jumbotronImgSrc from './jumbotron.jpg'
import Summary from '../webinar/summary'
import missionImgSrc from './mission.jpg'
import visionImgSrc from './vision.jpg'
import Description from './description'

const mission = {
    title: 'Misión',
    description: 'Aquaterra nace como respuesta al incremento de la huella de carbono, lleva realizando proyectos que impulsen la economía circular y por ende el desarrollo sostenible.',
    lines: [
        'Nos encontramos en pleno crecimiento,',
        '¿te gustaría apoyar/unirte?',
        '¿más información?',
        '¿feedback, consejo?',
        '',
        '¡Escríbenos, por favor!',
        '',
        <a href='mailto:aquaterra@gmail.com' className='btn-green'>aquaterra@gmail.com</a>,
    ]
}
const vision = {
    title: 'Visión',
    description: 'Reducir la huella de carbono mediante la construcción responsable utilizando como protagonista al bambú, que alcanza la dureza máxima a los 3 años y es un gran sumidero de carbono.',
    lines: [
        'Además de tener proyectos de construcción, nuestro objetivo es formar profesionales.',
        '',
        '¿Te unes a la causa?',
        '',
        <Link to='/webinars' className='btn-green'>Información del curso</Link>
    ]
}
const About = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div className='home-c'>
            <Jumbotron title="Acerca de nosotros" message="" imgSrc={jumbotronImgSrc}/>
            <Description title={mission.title} description={mission.description}/>
            <Summary img={missionImgSrc} lines={mission.lines}/>
            <Description title={vision.title} description={vision.description}/>
            <Summary img={visionImgSrc} lines={vision.lines}/>
            <div className='space'></div>
        </div>
    )
}

export default About;