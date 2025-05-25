import express from 'express'
import upload from '../config/multer-config.js'
import { productsCreate } from '../controllers/productsController.js'
import productmodel from '../models/productmodel.js'

const router=express.Router()


if(process.env.NODE_ENV==="development"){
    // router.post('/create',(req,res)=>{
    //     res.send("Hey its products working")
    // })
}


router.get('/',(req,res)=>{
    res.send("Hiiii from productsRoute")
})

router.post('/create',upload.single("image"),productsCreate)
router.get('/shop',async (req,res)=>{
     try{
        const data=await productmodel.find()
        res.send(data)
     }
     catch(err){
        console.log(err.message)
     }
})

export default router