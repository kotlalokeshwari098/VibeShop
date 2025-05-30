import usermodel from '../models/usermodel.js'
import bcrypt from 'bcrypt'
import generateToken from '../utils/generateToken.js'
import ownermodel from '../models/ownermodel.js'

export const registerUser = async(req,res)=>{
   
    try{
       let {email,password,fullname}=req.body;

       if (!email || !password || !fullname) {
       return res.status(400).json({ error: "All fields are required" });
       }
        let username=await usermodel.findOne({email})
        if(username) return res.status(401).send("Already account exist, please login")
        const hashedPassword=await bcrypt.hash(password,10)
        let user=await usermodel.create({
        email,
        password:hashedPassword,
        fullname
     })
    
      let token=generateToken(user)
      
      //  console.log(token)
     res.cookie("token",token,{
        httpOnly:true
     });
     res.send("user created successfully")
    }
     catch(err){
        res.send(err.message)
     }
}

export const loginUser = async (req,res)=>{
     try{
         let {email,password}=req.body;

         let user=await usermodel.findOne({email})
         if(!user) return res.send('Email or Password incorrect')

         const compare=bcrypt.compareSync(password,user.password)
         if(compare){
             let token=generateToken(user)
         res.cookie("token",token)
         res.send("You can login")
         }
         else{
            res.send("Email or Password incorrect")
         }
          
    }
    catch(err){
        res.send(err.message)
    }
}
export const logoutUser = async (req,res)=>{
     try{
        res.clearCookie("token",{
         httpOnly:true
        })
        res.send('logout successfullyy')
          
    }
    catch(err){
        res.send(err.message)
    }
}
// export const ownerRegister=async(req,res)=>{
//     try{

//     }
// }
export const registerOwner = async(req,res)=>{
   
    try{
       let {email,password,fullname}=req.body;

       if (!email || !password || !fullname) {
       return res.status(400).json({ error: "All fields are required" });
       }
        let username=await ownermodel.findOne({email})
        if(username) return res.status(401).send("Already account exist, please login")
        const hashedPassword=await bcrypt.hash(password,10)
        let user=await ownermodel.create({
        email,
        password:hashedPassword,
        fullname
     })
    
      let token=generateToken(user)
      
      //  console.log(token)
     res.cookie("token",token,{
        httpOnly:true
     });
     res.send("owner created successfully")
    }
     catch(err){
        res.send(err.message)
     }
}

export const loginOwner = async (req,res)=>{
     try{
         let {email,password}=req.body;

         let user=await ownermodel.findOne({email})
         if(!user) return res.send('Email or Password incorrect')

         const compare=bcrypt.compareSync(password,user.password)
         if(compare){
             let token=generateToken(user)
         res.cookie("token",token)
         res.send("You can login")
         }
         else{
            res.send("Email or Password incorrect")
         }
          
    }
    catch(err){
        res.send(err.message)
    }
}