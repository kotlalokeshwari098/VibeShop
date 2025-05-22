import express from 'express'
const router=express.Router()
import  ownerModel from '../models/ownermodel.js'

console.log(process.env.NODE_ENV)
// for  setx NODE_ENV "development”

if(process.env.NODE_ENV ==="development"){
    router.post('/create',async (req,res)=>{
        let owners=await ownerModel.find()
        if(owners.length > 0 ) {
            return res
              .status(500)
              .send("You don't have permission to create a new owner")
        }
        let {fullname,email,password}=req.body
        let createdOwner=await ownerModel.create({
             fullname,
             email,
             password
        })
        res.status(201).send(createdOwner)
    })
}


router.get('/',(req,res)=>{
    res.send("Hiiii from ownersRoute")
})


export default router