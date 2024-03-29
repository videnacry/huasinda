
import Box from '../../components/styled/box'
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
                    <Box fill/>
                </div>
                <div className='box-dark'>
                    <Box radius dark fill lines={props.boxes.dark.elmts}/> 
                </div>
                </> : ''}
                    <div className='box-light-2'>
                        <Box absolute fill style={{top: 0, left: 0}}/>
                    </div>
                <div className='img' style={{backgroundImage: 'url(' + props.img + ')'}}/>
                {
                    props.boxes.light ? 
                    <>
                    <div className='line-dark'>
                        <Box dark fill />
                    </div>
                    <div className='box-white'>
                        <Box radius shadowBottomRight style={{width: '100%', height: '100%', backgroundColor: 'white'}} lines={props.boxes.light.elmts}/>
                    </div>
                    </> : ''
                }
            </div>
        </section>
    )
}

export default Summary