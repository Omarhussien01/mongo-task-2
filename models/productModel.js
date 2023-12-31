const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true 
    },
    price:{
        type:Number,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    number_of_stocks:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("products",productSchema)