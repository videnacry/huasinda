import React, {useContext, useEffect} from 'react'

import Project from './project'
import Box from '../../components/box'

import projectFirst from './project-first'
import projectSecond from './project-second'

import './index.css'
import Context from '../../context'
const Projects = () => {
    
    const context = useContext(Context)
    useEffect(() => {
        window.scrollTo(0, 0)
        context.setHeaderState({})
      }, [])

    return(
        
        <div className='projects-p'>
            <div className='title'>
                <Box dark absolute style={{width: '100%', height: '100%'}}/>
                <h1>Proyectos Destacados</h1>
            </div>
            <Project project={projectFirst}/>
            <Project left project={projectSecond}/>
        </div>
        
    )
}

export default Projects