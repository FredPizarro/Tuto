"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./src/server"));
const serve = new server_1.default();
serve.start(() => {
    console.log(`Servidor corriendo en el puerto ${serve.port}`);
});
