import express from 'express'


const router=express.Router()


if(process.env.NODE_ENV==="development"){
    router.post('/create',(req,res)=>{
        res.send("Hey its user route working")
    })
}


router.get('/',(req,res)=>{
    res.send("Hiiii from userRoute")
})


export default router