import React, {useEffect} from 'react'

import Header from '../components/header'
import Greeting from '../webinar/greeting'
import Section from './section'
import Box from '../components/box'
import firstProjectImgSrc from '../img/rectangle/complete_outside.jpg'
import secondProjectImgSrc from '../about-us/jumbotron.jpg'
import Footer from '../components/footer'

const Projects = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const boxStyle = {bottom:'6vw', left: '10%', maxWidth: '400px'}
    return(
        <div className='webinar-p'>
            <Header/>
            <div className='header-space'></div>
            <hr style={{margin: '0 20px'}}/>
            <Greeting start='22/12/2020' end='28/12/2020' title='Proyectos Destacados' msg=''/>
            <Section title='22-12-2020' link='' imgSrc={firstProjectImgSrc} />
            <div style={{position: 'relative'}}>
                <Box lines={['Vivienda con un área de  100m2  y 2m de altura ubicada en conocoto']} dark style={boxStyle}/>
            </div>
            <div style={{height: '120px'}}/>
            <Section title='22-12-2021' link='' imgSrc={secondProjectImgSrc} />
            <div style={{position: 'relative'}}>
                <Box lines={['Hibernadero con un área de  20m2  y 3m de altura ubicada en carapungo']} dark style={boxStyle}/>
            </div>
            <Footer/>
        </div>
    )
}

export default Projects