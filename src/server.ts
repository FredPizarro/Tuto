import express from 'express';
import { SERVER_PORT } from './environment';

export default class Server{

    public app: express.Application;
    public port: number;

    constructor(){
        this.app = express();
        this.port = SERVER_PORT;
    }

    //levantar el servidor
    start(callback: ()=> void){
        this.app.listen(this.port,  callback);
    }

}
