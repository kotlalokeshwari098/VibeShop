import mongoose from "mongoose";
import config from 'config'
import dbgr from 'debug'

const debug=dbgr('development:mongoose')


mongoose
   .connect(`${config.get("MONGODB_URI")}/VibeShop`)
   .then(()=>{
    debug("connected")
   })
   .catch((err)=>{
      debug(err)
   })

export default mongoose.connection;