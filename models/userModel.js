const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true 
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    purchased_products:{
        type:[String]
    }
})

module.exports = mongoose.model("users",userSchema)