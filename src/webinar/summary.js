
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
                <div className='box-light'>
                    <Box style={{width: '100%', height: '100%'}}/>
                </div>
                <div className='box-dark'>
                    <Box wrap radius dark shadowTopLeft style={{width: '100%', height: '100%'}} lines={props.boxes.dark.elmts}/> 
                </div>
                </> : ''}
                <div className='img' style={{backgroundImage: 'url(' + props.img + ')'}}/>
                {props.boxes.light ? 
                <>
                <div className='line-dark'>
                    <Box dark style={{width: '100%', height: '100%'}}/>
                </div>
                <div className='box-white'>
                    <Box wrap radius shadowBottomRight style={{width: '100%', height: '100%', backgroundColor: 'white'}} lines={props.boxes.light.elmts}/>
                </div>
                </> : ''}
            </div>
            {props.boxes.light ? <Box wrap style={{width: '70%', marginBottom: '-20%', opacity: 0}} lines={props.boxes.light.elmts}/> : ''}
        </section>
    )
}

export default Summary