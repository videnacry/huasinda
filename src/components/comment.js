import React from 'react'
import './comment.css'

const Comment = () => {

    return(
        <div className='comment-c'>
            <div className='img'></div>
            <div className='data'>
                <div className='header'>
                    <div>Akbar</div>
                    <div className='stars'>
                        <div className='star'></div>
                        <div className='star'></div>
                        <div className='star'></div>
                        <div className='star'></div>
                        <div className='star'></div>
                    </div>
                </div>
                <p className='article'>It is wonderful how many good consecuences has this way of make houses!</p>
            </div>
        </div>
    )
}

export default Comment