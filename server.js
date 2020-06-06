const express = require('express')
const app = express()

//Se crea un Middleware qye llamará a un callback y
//presentará la información por el HTML
app.use(express.static(__dirname + '/public'));

//Express HBS engine
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    //Es una manera de mostrar datos en el navegador
    //res.send('Hello World')
    // let out = {
    //     nombre: 'Juan',
    //     edad: 26,
    //     url: req.url
    // };

    // res.send(out);

    res.render('home', {
        name: 'Juan',
        year: new Date().getFullYear()
    });
});

app.get('/data', (req, res) => {
    res.send('Hello World')
});

app.listen(8080, () => {
    console.log("Escuchando peticiones en el puerto 8080");
});