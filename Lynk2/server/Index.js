const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const app =express()
app.use(express.json())
app.use(cors())
const userModel = require('./models/User')
const url = 'mongodb+srv://neeladhasm:mongodb@cluster0.ubczj.mongodb.net/'
mongoose.connect(url)


app.get('/', async (req,res)=>{
    try{
        const result = await userModel.find({})
        res.send(result)
    }
    catch(err){
        console.log(err)
    }
})

app.post('/adduser', async(req,res)=>{
      const newUser = new userModel(req.body)
      console.log(newUser)
      try{
            await newUser.save()
            console.log("Saved New User "+newUser)
      }
      catch(err){
        console.log(err)
      }
})

app.listen(2000,()=>{
    console.log(`server running at http://localhost:${2000}`)
})