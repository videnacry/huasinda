require('dotenv/config')
const { join } = require('path')
const express = require ('express')
const app = express()
const buildPath = join(process.cwd(), 'build')

app.use(express.static(buildPath))

app.get('/links', async (req, res) => {
    const { show } = require('./server/link')
    const urls = [
        'https://www.ecojardinmagico.com/como-construir-pisos-de-tierra-paso-a-paso/',
        'https://bioconstruccionfutura.com/congreso-2020/',
        'https://bioconstruir.es/geometria-sagrada/',
        'https://www.ecojardinmagico.com/7-ideas-para-crear-un-huerto-vertical-en-casa/'
    ]
    const links = []
    for (let url of urls) {
        const link = await show(url)
        links.push(link)
    }
    res.status(200).json({links})
})

app.get('*', (req, res) => {
    res.status(200).sendFile(join(buildPath,'index.html'))
})

app.listen(process.env.PORT, () => console.log('http://localhost:3000/'))