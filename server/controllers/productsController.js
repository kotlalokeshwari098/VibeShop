import productmodel from "../models/productmodel.js"


export const productsCreate=async (req,res)=>{ 

      try{const {name,price,discount,bgcolor,textcolor,panelcolor}=req.body
      let product=await productmodel.create({
          image:req.file.buffer,
          name,price,discount,bgcolor,textcolor,panelcolor

      })
      res.send("successfully added")
}
  catch(err){
    res.send(err.message);
  }
}
export const getShopProducts=async (req,res)=>{
     try{
        const data=await productmodel.find()
        res.send(data)
     }
     catch(err){
        console.log(err.message)
     }
}

export const productsGet=async (req,res)=>{
     try{
       let user=await usermodel.findOne({email:req.user.email}).populate("cart")

        // console.log(user.cart);
        res.send(user)
     }
     catch(err){
        console.log(err.message)
     }
}

export const addCartItems=async (req,res)=>{
    console.log(req.user)
    try{
       let user=await usermodel.findOne({email:req.user.email})
       console.log(user)
    user.cart.push(req.params.id)
    await user.save()
    res.send("product added successfully")
    }
    catch(err){
        console.log("err",err.message)
        res.send("err",err.message)
    }
    
}