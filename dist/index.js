"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./src/server"));
const router_1 = __importDefault(require("./src/routes/router"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const serve = new server_1.default();
//This body-parser module parses the JSON, buffer, string and URL encoded data submitted using HTTP POST request.
serve.app.use(body_parser_1.default.urlencoded({ extended: true }));
serve.app.use(body_parser_1.default.json()); // lo que sea que se POSTeen lo tomara como un objeto javascript (JSON)
//Middlewares (The middleware was a part of Express.js earlier but now you have to install it separately.)
serve.app.use('/', router_1.default);
/*
 *   Habilitar cors
 */
serve.app.use(cors_1.default({ origin: true, credentials: true }));
// Inicializar el servidor
serve.start(() => {
    console.log(`Servidor corriendo en el puerto ${serve.port}`);
});
