const asyncHandler = require('express-async-handler')

const Product = require('../models/productModel')

const getAllProducts = asyncHandler(async(req,res)=>{
    const product = await User.find();
    res.status(200).json({message: product})
});

const createProduct = asyncHandler(async(req,res)=>{
    const {title,price,rating,number_of_stocks} = req.body;
    const product = await Product.create({title,price,rating,number_of_stocks})
   
    res.status(200).json(product)
});

const updateProduct = asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id)
    if(!product){
        res.status(400);
        throw new Error("product is not found")
    }
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json({message: updatedUser})
})

const deleteProduct = asyncHandler(async(req,res)=>{
    const product = await Product.findById(req.params.id)
    if(!Product){
        res.status(400);
        throw new Error("product is not found")
    }
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json(product)
})


module.exports = {getAllProducts,createProduct,updateProduct,deleteProduct}