

import { useState } from 'react'
import { getPropsInstance, Carousel } from '../../unstyled/carousel'
import './index.css'
import Modal from './modal'
import Box from '../box'

const carouselProps = getPropsInstance()
carouselProps.tag = {element:'nav', class:'carrousel'}
carouselProps.arrowLeft = {class:'btn-left', content:<>&lsaquo;</>}
carouselProps.arrowRight = {class:'btn-right', content:<>&rsaquo;</>}

const Webinars = (props) => { 
    const [isModalVisible, setModalVisible] = useState(false)
    const [selectedIdx, setSelectedIdx] = useState(0)

    const elements = props.modules.map((module, idx) => (
        <a key={idx+'webinars'} onClick={() => {setSelectedIdx(idx);setModalVisible(true)}} className='webinar'>
            <div className='img' style={{backgroundImage: 'url(' + module.icon + ')'}}></div>
            <span className='title'>{module.topic}</span>
        </a>         
    ))
    carouselProps.elements = elements

    return(
        <>
            <div className='webinars-c'>
                <Box dark fill absolute style={{top:0}}/>
              <Carousel props={carouselProps}/>
            </div>
            {isModalVisible&&<Modal elements={props.modules} selectedIdx={selectedIdx} closeHandler={() => setModalVisible(false)}/>}
        </>
    )
}

export default Webinars