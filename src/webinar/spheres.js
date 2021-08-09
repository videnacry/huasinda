import React from 'react'
import './spheres.css'

const Spheres = (props) => {

    return(
      <div className='spheres-s'>
        <h4 className='sphere-md'>
            <p>{props.text}</p>
        </h4>
        <div className='sphere-sm'></div>
      </div>  
    )
}

export default Spheres