import { Socket } from 'socket.io';
import socketIO from 'socket.io';
/* Logica de lo socket 
 * configuraciones y acciones 
*/


// desconectar cliente
export const desconectar = (client: Socket)=>{

    client.on('disconnect', ()=>{
        console.log("\x1b[31m%s\x1b[0m",`Se desconecto el <Cliente> a las ${ eventDataTime() }`);
    });
}

// fecha y hora manejable
export function eventDataTime(): string {
    return `${ new Date().toLocaleTimeString()} / ${ new Date().toLocaleDateString() } `;
}


// Escuchar mensajes
export const menssage = (client: Socket, io: socketIO.Server)=>{
    // paylod is data of angular keys
    client.on('message', ( payload: { id: number, username: string, message: string } )=>{
        console.log('Mensaje recibido', payload);
        io.emit("key-mensaje-nuevo", payload);
    });
}
