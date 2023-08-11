import React from 'react'
import './index.css'

const Box = (props) => {

    const {title, lines, style, dark, radius, absolute, shadowTopLeft, shadowTopRight, shadowBottomLeft, shadowBottomRight, wrap, fill} = props
    let boxClass = 'box-c'
    boxClass += fill ? ' fill' : ''
    boxClass += wrap ? ' wrap' : ''
    boxClass += dark ? ' dark' : ' light'
    boxClass += radius ? ' border-radius' : ''
    boxClass += absolute ? ' absolute' : ''
    boxClass += shadowBottomRight ? ' shadow-bottom-right' : shadowBottomLeft ? ' shadow-bottom-left' : shadowTopLeft ? ' shadow-top-left' :  shadowTopRight ? ' shadow-top-right' : ''
    return(
        <article className={boxClass} style={style}>
            {title ? <h2>{title}</h2> : ''}
            {lines ? lines.map((text, index) => (
                <div className='elmt' key={index}>{text}</div>
            )) : ''}
        </article>
    )
}
    
export default Box