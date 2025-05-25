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