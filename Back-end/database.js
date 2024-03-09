
const mongoose = require('mongoose')

const connectDB = async ()=>{
     mongoose.connect('mongodb://0.0.0.0:27017/stuDATAbAse')
     .then(()=>{
          console.log("connected database successfully")
     })
     .catch((err)=>{
          console.log("faild to connection")
     })
}

module.exports= connectDB