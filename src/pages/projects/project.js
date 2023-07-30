import { useEffect, useState } from 'react'
import Box from '../../components/box'
import './project.css'

const Project = (props) => {
    const [photosSrc, setImgs] = useState(props.project.photosSrc.slice(0, props.project.photosSrc.length))
    const [carrouselIdx, setCarrouselIdx] = useState(0)
    const spinCarrousel = (idx) => {
        let newPhotosSrc = props.project.photosSrc.slice(idx, props.project.photosSrc.length)
        if (newPhotosSrc.length < 3) 
            newPhotosSrc = [...newPhotosSrc, ...props.project.photosSrc.slice(0, props.project.photosSrc.length)]
        setImgs(() => newPhotosSrc)
    }
    const nextItem = () => {
        setCarrouselIdx((prev) => {
            const val = prev == props.project.photosSrc.length - 1 ? 0 : prev+1
            spinCarrousel(val)
            return val
        })
    }
    const prevItem = () => {
        setCarrouselIdx((prev) => {
            const val = prev == 0 ? props.project.photosSrc.length - 1 : prev-1
            spinCarrousel(val)
            return val
        })
    }
    const lightBoxStyle = {width: '85%', height: '100%', top: 0}
    const darkBoxStyle = {width: '85%', height: '20px'}
    if (props.left) {
        darkBoxStyle.marginRight = 'auto'
        lightBoxStyle.left = 0
    }
    else {
        darkBoxStyle.marginLeft = 'auto'
        lightBoxStyle.right = 0
    }

    return(
        <div className='project-s'>
            <h1>{props.project.title}</h1>
            <div className='carrousel'>
                <div className='light-bg'>
                    <Box absolute style={lightBoxStyle}/>
                </div>
                <Box dark style={darkBoxStyle}/>
                <div className='components'>
                    <div className='controls'>
                        <button className='btn-green' onClick={prevItem}>{'<'}</button>
                        <span>Galería</span>
                        <button className='btn-green' onClick={nextItem}>{'>'}</button>
                    </div>
                    <div className='imgs'>
                        <div className='prev'>
                            <div className='img' style={{backgroundImage: `url(${photosSrc[0]})`}}/>
                        </div>
                        <div className='next'>
                            <div className='img' style={{backgroundImage: `url(${photosSrc[2]})`}}/>
                        </div>
                        <div className='white'>
                            <div className='img'/>
                        </div>
                        <div className='curr'>
                            <div className='img' style={{backgroundImage: `url(${photosSrc[1]})`}}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project