import React, {useContext, useEffect} from 'react'

import Project from './project'
import Box from '../../components/styled/box'

import projectFirst from './gallery/first'
import projectSecond from './gallery/second'
import projectThird from './gallery/third'

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
            <Project left project={projectThird}/>
            <Project project={projectSecond}/>
        </div>
        
    )
}

export default Projects