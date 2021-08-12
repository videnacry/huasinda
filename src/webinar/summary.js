import React from 'react'
import './summary.css'

const Summary = (props) => {

    return(
        <section className='summary-c'>
            <div className='text'>
                <h3>{props.title}</h3>
                {props.lines.map((text, index) => (
                    <p className='line' key={index}>{text}</p>
                ))}
            </div>
            <img className='img' style={{backgroundImage: 'url(' + props.img + ')'}}/>
        </section>
    )
}

export default Summary