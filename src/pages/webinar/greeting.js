import React from 'react'
import './greeting.css'

const Greeting = (props) => {

    return(
        <header className='greeting-c'>
            <div className='brand'>
                <p className='time-range'>
                    <time dateTime={props.start}>{props.start}</time> {props.end? '/' : ''} <time dateTime={props.end}>{props.end}</time>
                </p>
                <h1 className='title'>{props.title}</h1>
            </div>
            <p className='msg'>{props.msg || ''}</p>
        </header>
    )
}

export default Greeting