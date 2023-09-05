import React from 'react'
import './index.css'

const Greeting = (props) => {
    
    /**
     * @return {object} can include background size, repeat, position and url
     */
    const getBackgroundStyle = () => {
        if (props.imgSrcDuo?.length == 2) 
            return {backgroundImage: `url(${props.imgSrcDuo[0]}), url(${props.imgSrcDuo[1]})`, backgroundSize: '50% 100%, 50% 100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'left, right'}
        return {backgroundImage: `url(${props.imgSrc})`}
    }
    return(
        <header className='jumbotron-c' style={props.style}>
            {
                !props.isVideo ? 
                <div className='brand' style={{...getBackgroundStyle()}}>
                    <h1 className={`title with-satellites ${!props.centerText||'center'}`}>{props.title}</h1>
                    {props.msg ? <p className='msg'>{props.msg}</p>:''}
                </div>
                :
                <div className='brand'>
                    <video className='video' controls={true}>
                        <source src={props.videoSrc} type={props.videoType}/>
                    </video>
                    <h1 className={`title with-satellites ${!props.centerText||'center'}`}>{props.title}</h1>
                    {props.msg ? <p className='msg'>{props.msg}</p>:''}
                </div>
            }
        </header>
    )
}

export default Greeting