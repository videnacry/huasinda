require('dotenv/config')
const { join } = require('path')
const express = require ('express')
const app = express()

app.use(express.static(join(process.cwd(), '/build')))

app.get('/', (req, res) => {
    res.status(200).sendFile('./build/index.html')
})

app.listen(process.env.PORT, () => console.log('http://localhost:3000/'))