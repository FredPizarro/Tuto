"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// puerto: si existe el el process env port (en caso como heroku) o usar el 4300
exports.SERVER_PORT = Number(process.env.PORT) || 4300;
