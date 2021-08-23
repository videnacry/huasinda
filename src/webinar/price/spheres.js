import React from 'react'
import './spheres.css'

const Spheres = (props) => {

    return(
      <div className='spheres-s'>
        <div className='sphere-md'>
            <p>{props.text}</p>
        </div>
        <div className='sphere-sm'></div>
      </div>  
    )
}

export default Spheres