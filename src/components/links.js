import { useState, useEffect } from 'react'
import './links.css'

const Links = () => {

    const [links, setLinks] = useState([])
    const [pageLinks, setPageLinks] = useState([
        {
            url: 'https://www.ecojardinmagico.com/como-construir-pisos-de-tierra-paso-a-paso/',
            img_path: 'https://www.ecojardinmagico.com/wp-content/uploads/2020/12/Piso-de-tierra-principal.jpg',
            name: 'Cómo construir pisos de tierra paso a paso',
            content: 'Los pisos de tierra son una gran opción para ...'
        }, {
            url: 'https://bioconstruccionfutura.com/congreso-2020/',
            img_path: 'https://bioconstruccionfutura.com/wp-content/uploads/2018/07/Logo-Circular.png',
            name: 'YA ESTAMOS EN LA SEMANA DEL CONGRESO CASAS SALUDABLES Y EFICIENTES',
            content: 'Vas a aprender cómo tener una casa saludable ...'
        }, {
            url: 'https://bioconstruir.es/geometria-sagrada/',
            img_path: 'https://bioconstruir.es/wp-content/uploads/2020/01/cropped-Bioconstruir-simbolo-rgb--32x32.png',
            name: 'Geometría sagrada - Bioconstruir',
            content: 'Es el conocimiento de las leyes de la medida,...'
        }, {
            url: 'https://www.ecojardinmagico.com/7-ideas-para-crear-un-huerto-vertical-en-casa/',
            img_path: 'https://www.ecojardinmagico.com/wp-content/uploads/2020/12/Huerta-vertical.jpg',
            name: '7 ideas para crear un huerto vertical en casa',
            content: 'Sólo porque tengas un pequeño jardín o un peq...'
        }
    ])

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
                        <a className="link" href={link.url}>
                            <img style={{backgroundImage: 'url("' + link.img_path + '")'}}/>
                            <h3>{link.name[0].toUpperCase() + link.name.substr(1)}</h3>
                            <p>{link.content.substr(0, 45) + '...'}</p>
                        </a>
                    </li>
                ))}
            </ul>
            <div className="space"></div>
        </div>
    )
}

export default Links