import React from 'react'
import './spheres.css'
import Box from '../../../components/styled/box'

const Spheres = ({text='', isDark=false}) => {

    return(
      <div className='spheres-s'>
        <div className='sphere-md'>
          <Box fill absolute dark={isDark} style={{top:0}}/>
            <div>{text}</div>
        </div>
        <div className='sphere-sm'></div>
      </div>  
    )
}

export default Spheres