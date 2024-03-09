const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
     name:{
          type:String,
          required:true,
     },
     url:{
          type:String,
          required:true,
     },
     msg:{
          type:String,
          required:true,
     }
   
})
module.exports= mongoose.model('users', userSchema)