import mongoose from 'mongoose';


let userSchema=mongoose.Schema({
     fullname:String,
     email:String,
     password:String,
     cart:{
          type:Array,
          default:[]
     },
     isAdmin:Boolean,
     orders:[],
     contact:Number,
     picture:String
})

export default mongoose.model('user',userSchema)