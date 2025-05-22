import mongoose from "mongoose";

import config from 'config'

mongoose
   .connect(`${config.get("MONGODB_URI")}/VibeShop`)
   .then(()=>{
    console.log("connected")
   })
   .catch((err)=>{
      console.log(err)
   })

export default mongoose.connection;