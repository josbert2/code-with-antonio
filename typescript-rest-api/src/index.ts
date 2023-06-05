// express: es un framework de nodejs que nos permite crear un servidor web
import express from 'express';
// http: es un modulo de nodejs que nos permite crear un servidor web
import http from 'http';
// bodyParse: es un modulo de nodejs que nos permite parsear los datos que nos llegan por el body
import bodyParser from 'body-parser';
// cookieParser: es un modulo de nodejs que nos permite parsear las cookies que nos llegan por el body
import cookieParser from 'cookie-parser';
// compression: es un modulo de nodejs que nos permite comprimir las respuestas que enviamos al cliente
import compresion from 'compression';
// cors: es un modulo de nodejs que nos permite configurar los cors de nuestro servidor
import cors from 'cors';

// inicializamos express 
const app = express();

// inicializamos el servidor http con express y le pasamos la configuracion de express 
app.use(cors({
   credentials: true,
}));

app.use(compresion());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(8000, () => {
   console.log('Server is running on port 3000');
});