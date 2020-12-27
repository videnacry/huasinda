import React, {useEffect} from 'react'
import Header from '../components/header'
import Greeting from './greeting'
import Webinars from '../components/webinars'
import Summary from './summary'
import Teacher from './teacher'
import LeaveComment from '../components/leaveComment'
import Footer from '../components/footer'
import './webinar.css'

const Prototype = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])
    
    const dates = ['22-12-2020', '24-12-2020', '26-12-2020', '28-12-2020']
    
    return(
        <div className='webinar-p'>
            <Header/>
            <div className='header-space'></div>
            <Webinars dates={dates}/>
            <Greeting start={props.webinar.date} title={props.webinar.title}/>
            <Summary img={props.webinar.img[0]} lines={props.webinar.summery}/>
            <section className='schedule'>
                <h1>**FECHA**</h1>
                {props.webinar.long_date.map(date => (
                    <p>{date}</p>
                ))}
            </section>
            <Teacher teachers={props.webinar.teachers}/>
            <img className='img' src={props.webinar.img[1]}/>
            <div className='leave-comment'><LeaveComment/></div>
            <div className='footer-space'></div>
            <Footer/>
        </div>
    )
}

export default Prototype