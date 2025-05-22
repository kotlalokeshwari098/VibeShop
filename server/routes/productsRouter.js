import express from 'express'


const router=express.Router()


if(process.env.NODE_ENV==="development"){
    router.post('/create',(req,res)=>{
        res.send("Hey its products working")
    })
}


router.get('/',(req,res)=>{
    res.send("Hiiii from productsRoute")
})


export default router