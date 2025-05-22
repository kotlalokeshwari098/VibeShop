import mongoose from "mongoose";


let ownerSchema=mongoose.Schema({
      fullname:String,
     email:String,
     password:String,
    products:[],
     picture:String,
     gstin:String
})

export default mongoose.model('owner',ownerSchema)