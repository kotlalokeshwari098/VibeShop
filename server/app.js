import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';
import ownerRouter from './routes/ownersRouter.js'
import usersRouter from './routes/usersRouter.js'
import productsRouter from './routes/productsRouter.js'


const app=express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename)
app.use(express.static(path.join(__dirname,'public')));


app.use('/owners',ownerRouter)
app.use('/users',usersRouter)
app.use('/products',productsRouter)

app.listen(5656,()=>console.log('listening on port 5656'));