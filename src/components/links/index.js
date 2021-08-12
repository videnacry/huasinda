import Box from '../box'
import './index.css'
import links from './links'

const Links = () => {
    const pageLinks = links.slice(0, 4)
    return(
        <div className="links-c">
            <Box absolute style={{width: '85%', height: '65%', top: '0', right: '0'}}/>
            <h1>Links</h1>
            <ul className="links">
                {pageLinks.map((link, idx) => (
                    <li key={`link-${idx}`}>
                        <a className="link" href={link.url}>
                            <div className='img' style={{backgroundImage: 'url("' + link.img_path + '")'}}/>
                            <h3>{link.name[0].toUpperCase() + link.name.substr(1)}</h3>
                            <p>{link.content.substr(0, 45) + '...'}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Links