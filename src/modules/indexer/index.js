
import Module from './module'

import './index.css'
import navModule from './nav-module'


const Indexer = ({modules=[navModule], bgHoleColor='white', isLeft=false}) => {
    
    return(
        <div className={`nav-s ${!isLeft||'inverse'}`} >
            <div className='background'/>
            <div className='square-hole' style={{backgroundColor: bgHoleColor}}></div>
            <div className='line-hole' style={{backgroundColor: bgHoleColor}}></div>
            <div className='list'>
                <div className='container'>
                <div className='box-first-gray'></div>
                <div className='box-second-gray'></div>
                    {modules.map((data, index) => <Module data={data} key={index+'module-link'} isLeft={isLeft} bgHole='white'/>)}    
                </div>
            </div>
        </div>
    )
}

export default Indexer