import React from 'react'
import './summary.css'

const Summary = (props) => {

    return(
        <section className='summary-c'>
            <p className='text'>
                {props.lines.map((text, index) => (
                    <div><div key={index}>{text}</div><br/></div>
                ))}
            </p>
            <img className='img' style={{backgroundImage: 'url(' + props.img + ')'}}/>
        </section>
    )
}

export default Summary