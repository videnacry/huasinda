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
            <Summary img={props.module.img[0]} boxes={{dark: {elmts: props.module.summery}}} title='**Temario**'/>
            <section className='schedule'>
                <h1>**Info**</h1>
                <p>El tiempo estimado de duración es de 8 horas.</p>
                <br/>
            </section>
            <Teacher teachers={props.module.teachers}/>
            <img className='img' src={props.module.img[1]}/>
            {/* <div className='leave-comment'><LeaveComment/></div> */}
            <div className='footer-space'></div>
        </div>
    )
}

export default Prototype