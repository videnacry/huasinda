import React from 'react'
import './index.css'

const Greeting = (props) => {

    return(
        <header className='jumbotron-c'>
            <div className='brand' style={{backgroundImage: `url(${props.imgSrc})`}}>
                <h1 className='title with-satellites'>{props.title}</h1>
                {props.msg ? <p className='msg'>{props.msg}</p>:''}
            </div>
        </header>
    )
}

export default Greeting