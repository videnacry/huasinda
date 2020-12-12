import React, {useEffect} from 'react'
import './Home.css'
import Header from '../components/header'
import Webinars from './webinars'
import Footer from '../components/footer'
import LeaveComment from '../components/leaveComment'

const Home = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div className='home-c'>
            <Header/>
            <div className='greet'>
                <h1 className='msg'></h1>
                <div className='img'></div>
            </div>
            <Webinars/>
            <LeaveComment/>
            <Footer/>
        </div>
    )
}

export default Home;