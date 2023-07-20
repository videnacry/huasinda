import Box from '../components/box';
import './description.css'

const Description = (props) => {

    return(
        <div className={props.mission ? 'description-mission-s' : 'description-vision-s'}>
            {!props.startMsg || <p className='start-msg'>{props.startMsg}</p>}
            <div className={'bg-box'}><Box fill/></div>
            <img src={props.imgSrc} className='img'/>
            <div className='text-boxes'>
                <div className='description'>
                    <Box title={<u>{props.title}</u>} lines={[<div style={{textAlign:'left'}}>{props.description}</div>]} shadowTopRight={props.mission} shadowBottomLeft={!props.mission} radius style={{backgroundColor:'white'}}/>
                </div>
                <div className='dialog'>
                    <Box lines={props.dialog} dark shadowBottomRight radius/>
                </div>
            </div>
            {!props.endMsg || <p className='end-msg'>{props.endMsg}</p>}
        </div>
    )
}

export default Description;