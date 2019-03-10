import express from 'express';
import { SERVER_PORT } from './environment';
import socketIO from 'socket.io';
import http from 'http';

import * as socket from './sockets/sockets';

export default class Server{

    private static _instance: Server;

    public app: express.Application;
    public port: number;

    public io: socketIO.Server;
    private httpServer: http.Server;

    private constructor(){
        this.app = express();
        this.port = SERVER_PORT;

        this.httpServer = new http.Server( this.app );
        this.io = socketIO( this.httpServer ); // servidor de sockets
                  // este io tiene el control y el conocimiento de quienes estan conectados
        this.onSockets();
    }

    // Patron singleton (para no crear nuevas/varias instancia de la clase Serve)
    // getter, es utilizada para usar propiedades, pero realmente son métodos que se ejecutan cuando una propiedad es usada.
    public static get instance(){
        // crear una nueva instancia de la clase, si es que no existe una instancia creada ya ...
        return this._instance || (this._instance = new this());
    }

    //escuchar sockets
    private onSockets(){
        console.log("Escuchando conexiones - sockets!");
        // this.io.sockets.on();
        this.io.on('connection', (client)=>{
            console.log("\x1b[32m%s\x1b[0m", `Un <cliente> conectado a las ${ socket.eventDataTime() }`);
            socket.menssage(client, this.io);
            //disconnect
            socket.desconectar(client);
        });
    }


    //levantar el servidor
    start(callback: ()=> void){
        // this.app.listen(this.port,  callback);
        this.httpServer.listen(this.port, callback);
    }

}
