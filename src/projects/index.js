import React, {useEffect} from 'react'

import Header from '../components/header'
import Project from './project'
import Box from '../components/box'
import Footer from '../components/footer'

import projectFirst from './project-first'
import projectSecond from './project-second'

import './index.css'
const Projects = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const boxStyle = {bottom:'6vw', left: '10%', maxWidth: '400px'}
    return(
        <div className='projects-p'>
            <Header/>
            <div className='title'>
                <Box dark absolute style={{width: '100%', height: '100%'}}/>
                <h1>Proyectos Destacados</h1>
            </div>
            <Project project={projectFirst}/>
            <Project left project={projectSecond}/>
            <Footer/>
        </div>
    )
}

export default Projects