import React, {useEffect} from 'react'
import Greeting from './greeting'
import Webinars from '../components/webinars'
import Summary from './summary'
import Teacher from './teacher'
// import LeaveComment from '../components/leaveComment'
import './webinar.css'

const Prototype = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    return(
        <div className='webinar-p'>
            <div className='header-space'></div>
            <Webinars modules={props.modules}/>
            <Greeting start={props.module.date} title={props.module.title}/>
            <Summary img={props.module.img[0]} lines={props.module.summery} title='**Temario**'/>
            <section className='schedule'>
                <h1>**FECHA**</h1>
                {props.module.long_date.map(date => (
                    <p>{date}</p>
                ))}
            </section>
            <Teacher teachers={props.module.teachers}/>
            <img className='img' src={props.module.img[1]}/>
            {/* <div className='leave-comment'><LeaveComment/></div> */}
            <div className='footer-space'></div>
        </div>
    )
}

export default Prototype