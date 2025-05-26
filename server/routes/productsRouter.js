import express from 'express'
import upload from '../config/multer-config.js'
import { productsCreate,productsGet,getShopProducts ,addCartItems} from '../controllers/productsController.js'
import productmodel from '../models/productmodel.js'
import loggedIn from '../middlewares/isLoggedIn.js'
import usermodel from '../models/usermodel.js'

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
router.get('/shop',loggedIn,getShopProducts)

router.get('/cart',loggedIn,productsGet)

router.get('/addToCart/:id',loggedIn,addCartItems)

export default router