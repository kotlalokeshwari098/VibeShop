import usermodel from '../models/usermodel.js'
import bcrypt from 'bcrypt'


export const registerUser = async(req,res)=>{
   
    try{
       let {email,password,fullname}=req.body;

       if (!email || !password || !fullname) {
       return res.status(400).json({ error: "All fields are required" });
       }
       
        const hashedPassword=await bcrypt.hash(password,10)
        let user=await usermodel.create({
        email,
        password:hashedPassword,
        fullname
     })
    
      let token=generateToken(user)
    //   setting token on user browser
    
     console.log(token)
     res.cookie("token",token);
     res.send("user created successfully")
    }
     catch(err){
        res.send(err.message)
     }
}