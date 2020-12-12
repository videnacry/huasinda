import React from 'react'

const Posts = () => {

    return(
        <div className='position-relative'>
            <div className='rectangle-white'></div>
            <div className='rectangle-grey'></div>
            <div className='position-absolute w-100'>
                <a><h1>POSTS</h1></a>
                <div>
                    <div className='h-500 col-12 post-img rounded'></div>
                </div>
                <div className='position-absolute'>Historias, consejos...</div>
                <a>más información!</a>
            </div>
        </div>
    )
}

export default Posts