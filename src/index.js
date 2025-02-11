import express from 'express';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

import router from './routes/index.js';
import {conectar} from './services/conexion.js';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(join(__dirname, 'public')));
conectar();
app.use(cors());
const corsOptions = {
    origin: 'https://json-dw-grupo2-1.onrender.com',
    optionsSuccessStatus: 200
}

app.set('views', join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(router);

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
});
