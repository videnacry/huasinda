import React from 'react'
import './blackBox.css'

const BlackBox = (props) => {

    const {title, lines, style} = props
    return(
        <section className='blackBox-c'>
            <article className='text' style={style}>
                <h2>{title}</h2>
                {lines.map((text, index) => (
                    <div><div key={index}>{text}</div><br/></div>
                ))}
            </article>
        </section>
    )
}
    
export default BlackBox