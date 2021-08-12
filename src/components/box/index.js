import React from 'react'
import './index.css'

const Box = (props) => {

    const {title, lines, style, dark, radius, absolute} = props
    let boxClass = 'box-c'
    boxClass += dark ? ' dark' : ' light'
    boxClass += radius ? ' border-radius' : ''
    boxClass += absolute ? ' absolute' : ''
    return(
        <article className={boxClass} style={style}>
            {title ? <h2>{title}</h2> : ''}
            {lines ? lines.map((text, index) => (
                <><div key={index}>{text}</div><br/></>
            )) : ''}
        </article>
    )
}
    
export default Box