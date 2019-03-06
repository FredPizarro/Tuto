import Server from "./src/server";


const serve = new Server();

serve.start( ()=>{
    console.log(`Servidor corriendo en el puerto ${ serve.port }`);
});