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

// router.post('/products',(req,res)=>{
//       const {image,name,price,discount,bgcolor,textcolor,panelcolor}=req.body

//       try{
//         let products=
//       }
//       catch(err){
//         console.log(err.message)
//       }
// })


export default router
//  image:'',
        //  name:'',
        //  price:'',
        //  discount:'',
        //  bgcolor:'',
        //  textcolor:'',
        //  panelcolor:''