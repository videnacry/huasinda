import Box from '../../../components/box'
import {ReactComponent as SvgCart} from './cart.svg'
import './module.css'

const Module = (props) => {
    return(
        <div className='module-s'>
            <div className='line-white'>
                <Box fill style={{backgroundColor: 'white'}}/>
            </div>
            <div className='card-module'>
                <h1><a href={props.topic}>{props.title}</a></h1>
                <hr/>
                <div className='options'>
                    <button className='btn-black'><a href={props.topic}>info</a></button>
                    <button className='btn-green'>+<SvgCart height='1em' width='auto' fill='white'/></button>
                </div>
            </div>
        </div>
    )
}

export default Module