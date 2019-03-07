// puerto: si existe el el process env port (en caso como heroku) o usar el 4300
export const SERVER_PORT: number = Number(process.env.PORT) || 4300;
