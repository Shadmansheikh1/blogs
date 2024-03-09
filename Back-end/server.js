const express = require('express')
const dbfile = require('./database')
const userFile= require('./Models/userModel')

const app = express()
dbfile()

const port = 3030 
app.use(express.json())

app.get('/', (req,res)=>{
     res.send("hello")
})
app.post('created', async(req, res)=>{
    try {
     let data = await userFile.create({
          name:req.body.name,
          url:req.body.url,
          msg:req.body.msg
     })
     res.status(200).json({msg:"user created sucessfully" ,success:true, data})
    } catch (error) {
     res.status(500).json({msg:"user does't created " ,success:false})
    }
     
})

app.listen(port, ()=>{
     console.log(`app on listening on ${port}`)
})




