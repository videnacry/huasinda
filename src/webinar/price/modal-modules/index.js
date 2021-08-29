import Box from '../../../components/box'
import Module from './module'
import './index.css'
import ImgSrcEcovillage from './ecovillage.jpg'
const ModulesModal = () => {
    return(
        <div className='modal-s'>
            <div className='backdrop'/>
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
                    <button className='btn-close'><h1>x</h1></button>
                </div>
                <div className='box-first-gray'>
                    <Box fill/>
                </div>
                <div className='box-second-gray'>
                    <Box fill/>
                </div>
                <div className='container'>
                    <div className='modules'>
                        <Module/>
                        <Module/>
                        <Module/>
                        <Module/>
                        <Module/>
                        <Module/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModulesModal