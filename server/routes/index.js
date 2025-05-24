import express from "express";
import isLoggedIn from '../middlewares/isLoggedIn.js';

const router=express.Router();

router.get('/shop',isLoggedIn,(req,res)=>{
    res.send("shop page")
})

export default router