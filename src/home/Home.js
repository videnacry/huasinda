import React, {useEffect} from 'react'
import './Home.css'
import Header from '../components/header'
import Webinars from './webinars'
import BlackBox from '../components/blackBox'
import LeaveComment from '../components/leaveComment'
import Links from '../components/links'
import Footer from '../components/footer'

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
            <div className='space'></div>
            <Webinars/>
            <BlackBox title="¡Una gran experiencia!" lines={[]} style={{color: 'white', bottom: '6vw', left: '10vw'}}/>
            <div className='space'></div>
            <LeaveComment/>
            <Links/>
            <Footer/>
        </div>
    )
}

export default Home;