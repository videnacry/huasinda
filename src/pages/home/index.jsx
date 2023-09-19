import React, {useContext, useEffect} from 'react'
import './index.css'
import Jumbotron from '../../components/styled/jumbotron'
import Gallery from './gallery'
import Workshop from './workshop'
import AboutUs from './about-us'
// import LeaveComment from '../../components/styled/leaveComment'
import Links from '../../components/styled/links'
import jumbotronImgSrc from './img/jumbotron.webp'
import Context from '../../context'

const Home = () => {

    const context = useContext(Context)
    useEffect(() => {
        window.scrollTo(0, 0)
        context.setHeaderState({isSticky:true})
    }, [])

    return(
        <div className='home-c'>
            <Jumbotron title="¿Te unes al camino verde?" imgSrc={jumbotronImgSrc}/>
            <Workshop/>
            <Gallery/>
            <AboutUs/>
            <div className='space'></div>
            {/* <LeaveComment/> */}
            <Links/>
        </div>
    )
}

export default Home;