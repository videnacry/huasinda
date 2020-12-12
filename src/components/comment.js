import React from 'react'
import './comment.css'
import profile_picture from '../img/circle/esqueleton.jpg'

const Comment = () => {

    return(
        <div className='comment-c'>
            <div className='img' style={{backgroundImage: 'url("' + profile_picture + '")'}}></div>
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