const express = require('express');
const mongoose = require('mongoose')

const app = express();
const routes = require('./Server/Routes/router');

const port = 3000;

app.use(express.json())


const mongoConnect = async () => {
    try {
        await mongoose.connect(
            'mongodb+srv://ivangarciafou:pro-talento2023@cluster0.70u6jko.mongodb.net/?retryWrites=true&w=majority'
        )
        console.log('Se realizo correctamente la conexión con Mongo DB')
    }

    catch (err) {
        console.log(err)
    }
}
mongoConnect()

app.get('/api', routes)

app.get('/', (req, res) => {
    res.send('Bienvenidos al Mundo!!!')
})

app.listen(port, () => {
    console.log(`Servidor está en ejecución en http://localhost:${port}`);
});
