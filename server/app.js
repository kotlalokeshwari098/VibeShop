import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
import { fileURLToPath } from 'url';

const app=express();
app.express(json());
app.use(cookieParser());
app.use(express.urlencoded({extended:true}))
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename)
app.use(express.static(path.join(__dirname,'public')));



app.get('/',(req,res)=>{
    res.send('Heloooo people')
})

app.listen(5656,()=>console.log('listening on port 5656'));