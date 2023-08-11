import Box from '../../../../components/styled/box'
import Module from './module'
import './index.css'
import ImgSrcEcovillage from './ecovillage.jpg'
const ModulesModal = (props) => {
    return(
        <div className='modal-s'>
            <div className='backdrop' onClick={props.toggleIsVisible}/>
            <div className='modal'>
                <div className='background' style={{backgroundImage: `url(${ImgSrcEcovillage})`}}/>
                <div className='box-first-white'>
                    <Box fill style={{backgroundColor: 'white'}}/>
                </div>
                <div className='box-second-white'>
                    <Box fill style={{backgroundColor: 'white'}}/>
                </div>
                <div className='box-third-white'>
                    <Box fill style={{backgroundColor: 'white'}}/>
                </div>
                <div className='header'>
                    <h1>**Módulos**</h1>
                    <button className='btn-close' onClick={props.toggleIsVisible}><h1>x</h1></button>
                </div>
                <div className='box-first-gray'>
                    <Box fill/>
                </div>
                <div className='box-dark'>
                    <Box dark fill/>
                </div>
                <div className='box-second-gray'>
                    <Box fill/>
                </div>
                <div className='container'>
                    <div className='modules'>
                        {props.modules.map((module, index) => <Module clickHandler={module.clickHandler} title={module.title} key={index+'modules-moodal'}/>)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModulesModal