
import Box from '../components/box'
import './summary.css'

const Summary = (props) => {

    return(
        <section className='summary-c'>
            <div className='text'>
                <h3>{props.title}</h3>
            </div>
            <div className='frame'>
                {props.boxes.dark ? 
                <>
                <Box absolute style={{width: '54%', height: '36%', top: '-42%', right: '0'}}/>
                <Box absolute wrap radius dark shadowTopLeft style={{maxWidth: '50%', minHeight: '50%', width: '45%', top: '-35%', right: '1%'}} lines={props.boxes.dark.elmts}/> 
                </> : ''}
                <div className='img' style={{backgroundImage: 'url(' + props.img + ')'}}/>
                {props.boxes.light ? 
                <>
                <Box absolute dark style={{width: '100%', bottom: '-15%', left: '0'}}/>
                <Box absolute wrap radius shadowBottomRight style={{width: '70%', top: '70%', left: '1%', backgroundColor: 'white'}} lines={props.boxes.light.elmts}/>
                </> : ''}
            </div>
            {props.boxes.light ? <Box style={{width: '70%', marginBottom: '-36%', opacity: 0}} lines={props.boxes.light.elmts}/> : ''}
        </section>
    )
}

export default Summary