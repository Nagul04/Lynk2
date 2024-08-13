const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    userName:{
        type:String,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        require:true
    }
})

const userModel = mongoose.model("LynkUser",userSchema)

module.exports = userModel