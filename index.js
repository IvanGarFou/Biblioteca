const express = require('express')
const app = express()
const routes = require('./Server/Routes/router')

const port = 3000;

app.use(express.json())

app.use('/api', routes)

app.listen(port, () =>{
    console.log(`Servidor esta en ejecucion en http://localhost:${port}`)
})