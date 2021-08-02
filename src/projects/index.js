import React, {useEffect} from 'react'

import Header from '../components/header'
import Greeting from '../webinar/greeting'
import Section from '../home/section'
import BlackBox from '../components/blackBox'
import firstProjectImgSrc from '../img/rectangle/complete_outside.jpg'
import secondProjectImgSrc from '../about-us/jumbotron.jpg'
import Links from '../components/links'
import Footer from '../components/footer'

const Projects = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const lines = ['HUASINDA los invita a participar del programa:',
    '¨Creación de entornos Bio Regenerativos: Una visión desde la Permacultura y la Bioconstrucción¨',
    'Compuesto por 14 webinars.',
    'Duración: 3hs cada webinar.']

    
    const dates = ['22-12-2020', '24-12-2020', '26-12-2020', '28-12-2020']
    const blackBoxStyle = {bottom:'6vw', left: '10%', maxWidth: '400px'}
    return(
        <div className='webinar-p'>
            <Header/>
            <div className='header-space'></div>
            <hr style={{margin: '0 20px'}}/>
            <Greeting start='22/12/2020' end='28/12/2020' title='Proyectos Destacados' msg=''/>
            <Section title='22-12-2020' link='' imgSrc={firstProjectImgSrc} />
            <BlackBox lines={['Vivienda con un área de  100m2  y 2m de altura ubicada en conocoto']} style={blackBoxStyle}/>
            <div style={{height: '120px'}}/>
            <Section title='22-12-2021' link='' imgSrc={secondProjectImgSrc} />
            <BlackBox lines={['Hibernadero con un área de  20m2  y 3m de altura ubicada en carapungo']} style={blackBoxStyle}/>
            <Links/>
            <Footer/>
        </div>
    )
}

export default Projects