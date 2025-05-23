import express from 'express'
import { registerUser,loginUser } from '../controllers/authController.js'


const router=express.Router()


if(process.env.NODE_ENV==="development"){
    router.post('/create',(req,res)=>{
        res.send("Hey its user route working")
    })
}

router.post('/register',registerUser)
router.post('/login',loginUser)

export default router