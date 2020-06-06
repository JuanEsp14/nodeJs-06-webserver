const express = require('express')
const app = express()

app.get('/', (req, res) => {
    //res.send('Hello World')
    let out = {
        nombre: 'Juan',
        edad: 26,
        url: req.url
    };

    res.send(out);
});

app.get('/data', (req, res) => {
    res.send('Hello World')
});

app.listen(8080, () => {
    console.log("Escuchando peticiones en el puerto 8080");
});