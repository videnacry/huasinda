import React, {useContext, useEffect} from 'react'
import './index.css'
import Jumbotron from '../../components/jumbotron'
import Proyects from './projects'
import Webinars from './webinars'
// import LeaveComment from '../../components/leaveComment'
import Links from '../../components/links'
import jumbotronImgSrc from './jumbotron.jpg'
import Context from '../../context'

const Home = () => {

    const context = useContext(Context)
    useEffect(() => {
        window.scrollTo(0, 0)
        context.setHeaderState({isFixed:true})
    }, [])

    return(
        <div className='home-c'>
            <Jumbotron title="¿Te unes al camino verde?" imgSrc={jumbotronImgSrc}/>
            <Webinars/>
            <Proyects/>
            <div className='space'></div>
            {/* <LeaveComment/> */}
            <Links/>
        </div>
    )
}

export default Home;