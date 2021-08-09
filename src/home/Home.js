import React, {useEffect} from 'react'
import './Home.css'
import Header from '../components/header'
import Jumbotron from '../components/jumbotron'
import Proyects from './projects'
import Webinars from './webinars'
// import LeaveComment from '../components/leaveComment'
import Links from '../components/links'
import Footer from '../components/footer'
import jumbotronImgSrc from './jumbotron.jpg'

const Home = () => {
    
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return(
        <div className='home-c'>
            <Header/>
            <Jumbotron title="¿Te unes al camino verde?" imgSrc={jumbotronImgSrc}/>
            <Webinars/>
            <Proyects/>
            <div className='space'></div>
            {/* <LeaveComment/> */}
            <Links/>
            <Footer/>
        </div>
    )
}

export default Home;