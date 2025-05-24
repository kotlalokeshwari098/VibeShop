import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors'
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import db from './config/mongoose-connection.js'
import ownerRouter from './routes/ownersRouter.js'
import usersRouter from './routes/usersRouter.js'
import productsRouter from './routes/productsRouter.js'
import indexRouter from './routes/index.js'


const app=express();
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename)


app.use(cors({
  origin: 'http://localhost:5173', // frontend URL
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.join(__dirname,'public')));


app.use('/',indexRouter)
app.use('/owners',ownerRouter)
app.use('/users',usersRouter)
app.use('/products',productsRouter)

app.listen(5656,()=>console.log('listening on port 5656'));