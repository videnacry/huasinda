import React from 'react'
import './index.css'

const Box = (props) => {

    const {title, lines, style, dark} = props
    return(
        <article className={`box-c ${dark ? 'dark' : 'light'}`} style={style}>
            <h2>{title}</h2>
            {lines ? lines.map((text, index) => (
                <><div key={index}>{text}</div><br/></>
            )) : ''}
        </article>
    )
}
    
export default Box