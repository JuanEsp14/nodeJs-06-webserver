//Nos permite crear rápidamente un WebServer
const http = require('http');

//El http recibe los requests y las respuestas que nuestro 
//servidor va a enviar.
//Se puede confirar el puerto para probar de manera local
http.createServer((request, responses) => {
    //Se devuelve un JSON
    responses.writeHead(200, { 'Content-type': 'application/json' })
    let out = {
        nombre: 'Juan',
        edad: 26,
        url: request.url
    }
    responses.write(JSON.stringify(out));
    //Se debe indicar cuando se termina de crear la respuesta
    responses.end();

}).listen(8080);

console.log('Escuchando el puerto 8080');