import {Link} from 'react-router-dom'

import './webinars.css'

const Webinars = (props) => { 
    return(
        <nav className='webinars-c'>
            {props.modules.map(module => (
                <Link to={'/' + module.topic} className='webinar'>
                    <div className='img' style={{backgroundImage: 'url(' + module.icon + ')'}}></div>
                    <span>{module.topic}</span>
                </Link>         
            ))}
        </nav>
    )
}

export default Webinars