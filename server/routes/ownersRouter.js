import express from 'express'
const router=express.Router()
import  ownerModel from '../models/ownermodel.js'
import { loginOwner, registerOwner } from '../controllers/authController.js'

console.log(process.env.NODE_ENV)
// for  setx NODE_ENV "development”

if(process.env.NODE_ENV ==="development"){
    
}


router.post('/register',registerOwner)

router.post('/login',loginOwner)


export default router