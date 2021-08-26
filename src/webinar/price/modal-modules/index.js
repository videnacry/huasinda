import Box from '../../../components/box'
import Module from './module'
import './index.css'
const ModulesModal = () => {
    return(
        <div className='modal-s'>
            <div className='backdrop'/>
            <div className='modal'>
                <div className='column-dark'>
                    <Box dark style={{width: '95%', height: '97.4%', top: '1.2%', left: '0'}}/>
                </div>
                <div className='header'>
                    <h1>**Módulos**</h1>
                    <button className='btn-close'><h1>x</h1></button>
                </div>
                <div className='container-gray'>
                    <Module/>
                    <Module/>
                    <Module/>
                    <Module/>
                    <Module/>
                    <Module/>
                </div>
            </div>
        </div>
    )
}

export default ModulesModal