import mongoose from 'mongoose';


let userSchema=mongoose.Schema({
     fullname:{
          type:String,
          minLength:3,
          trim:true
     },
     email:String,
     password:String,
     cart:{
          type:Array,
          default:[]
     },
     orders:[],
     contact:Number,
     picture:String
})

export default mongoose.model('user',userSchema)