

import './webinars.css'

const Webinars = (props) => { 
    return(
        <nav className='webinars-c'>
            {props.modules.map((module, idx) => (
                <a key={idx+'webinars'} to={'/' + module.topic} className='webinar'>
                    <div className='img' style={{backgroundImage: 'url(' + module.icon + ')'}}></div>
                    <span className='title'>{module.topic}</span>
                </a>         
            ))}
        </nav>
    )
}

export default Webinars