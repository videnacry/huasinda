import React, {useEffect} from 'react'
import './Home.css'
import Header from '../components/header'
import Jumbotron from '../components/jumbotron'
import Section from './section'
import BlackBox from '../components/blackBox'
// import LeaveComment from '../components/leaveComment'
import Links from '../components/links'
import Footer from '../components/footer'
import jumbotronImgSrc from '../img/circle/esqueleton.jpg'
import modulesImgSrc from '../img/circle/complete_inside.jpg'
import projectsImgSrc from '../img/circle/complete_outside.jpg'

const Home = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div className='home-c'>
            <Header/>
            <Jumbotron title="¿Te unes al camino verde?" imgSrc={jumbotronImgSrc}/>
            <div className='space'></div>
            <Section title='Webinars' link='/webinars' imgSrc={modulesImgSrc}/>
            <BlackBox title="¡Un estudio por el medioambiente!" lines={[]} style={{color: 'white', bottom: '6vw', left: '10vw'}}/>
            <div className='space'></div>
            <Section title='Proyectos' link='/projects' imgSrc={projectsImgSrc}/>
            <BlackBox title="¡Línea temporal de proyectos!" lines={[]} style={{color: 'white', bottom: '6vw', left: '10vw'}}/>
            <div className='space'></div>
            {/* <LeaveComment/> */}
            <Links/>
            <Footer/>
        </div>
    )
}

export default Home;