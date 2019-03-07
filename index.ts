import Server from "./src/server";
import router from "./src/routes/router";
import bodyParser from 'body-parser';
import cors from 'cors';

const serve = new Server();

//This body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request.
serve.app.use( bodyParser.urlencoded({ extended: true }) );
serve.app.use( bodyParser.json() ); // lo que sea que se POSTeen lo tomara como un objeto javascript (JSON)
//Middlewares (The middleware was a part of Express.js earlier but now you have to install it separately.)
serve.app.use('/', router);

/*
 *   Habilitar cors
 */
serve.app.use( cors({ origin: true, credentials: true }) );


// Inicializar el servidor
serve.start( ()=>{
    console.log(`Servidor corriendo en el puerto ${ serve.port }`);
});
