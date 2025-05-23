import express from 'express'
import { registerUser } from '../controllers/authController.js'

const router=express.Router()


if(process.env.NODE_ENV==="development"){
    router.post('/create',(req,res)=>{
        res.send("Hey its user route working")
    })
}

router.post('/register',registerUser)

export default router