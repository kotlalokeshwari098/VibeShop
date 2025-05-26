import mongoose from 'mongoose';


let userSchema=mongoose.Schema({
     fullname:{
          type:String,
          minLength:3,
          trim:true
     },
     email:String,
     password:String,
     cart:[{
          type:mongoose.Schema.Types.ObjectId,
          ref:'product'
     }],
     orders:[],
     contact:Number,
     picture:String
})

export default mongoose.model('user',userSchema)