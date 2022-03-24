import cors from 'cors';
import express, { json } from 'express';
import morgan from 'morgan';
//import routes
import userRoutes from './routes/user.routes';

//inicializacion
const app = express();

// middlewares
app.use(cors());
// app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/user', userRoutes);

export default app;
