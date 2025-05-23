import jwt from 'jsonwebtoken'
import usermodel from '../models/usermodel'

export async function loggedIn(req,res,next){
    if(!req.cookies.token){
       return res.send("error you need to login first")
        
    }
    try{
       let decode= jwt.verify(res.cookies.token,process.env.JWT_KEY)
       let user=await usermodel
       .findOne({email:decode.email})
       .select('-password')
    //    here password field will not be selected
       console.log(user)
       req.user=user;
       next();
    }
    catch(err){
         res.send("error",err.message)
    }
}