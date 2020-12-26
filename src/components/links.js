import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './links.css'

const Links = () => {

    const [links, setLinks] = useState([])
    const [pageLinks, setPageLinks] = useState([])

    useEffect(() => {
        fetch('/links', {method: 'GET'}).then(res => res.json())
        .then(({links}) => {
            setLinks(links)
            setPageLinks(links.slice(0, 4))
        })
    }, [])

    return(
        <div className="links-c">
            <h1>**Enlaces recomendados**</h1>
            <ul className="links">
                {pageLinks.map(link => (
                    <li>
                        <Link className="link" to={link.url}>
                            <img style={{backgroundImage: 'url("' + link.img_path + '")'}}/>
                            <h3>{link.name[0].toUpperCase() + link.name.substr(1)}</h3>
                            <p>{link.content.substr(0, 45) + '...'}</p>
                        </Link>
                    </li>
                ))}
            </ul>
            <div className="space"></div>
        </div>
    )
}

export default Links