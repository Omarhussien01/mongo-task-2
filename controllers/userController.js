const asyncHandler = require('express-async-handler')

const User = require('../models/userModel')

const getAllUsers = asyncHandler(async(req,res)=>{
    const user = await User.find();
    res.status(200).json({message: user})
});

const createUser = asyncHandler(async(req,res)=>{
    const {name,age,email,purchased_products} = req.body;
    const user = await User.create({name,age,email,purchased_products})
    console.log(name , age, email, purchased_products)
    res.status(200).json(user)
});

const updateUser = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.params.id)
    if(!user){
        res.status(400);
        throw new Error("User is not found")
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json({message: updatedUser})
})

const updateProducts = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.params.id)
    if(!user){
        res.status(400);
        throw new Error("User is not found")
    }
    const updatedUser = await User.findByIdAndUpdate(req.params.id,{$push:{purchased_products:[req.body.id]}},{new:true})
    res.status(200).json({message: updatedUser})
})

const deleteUser = asyncHandler(async(req,res)=>{
    const user = await User.findById(req.params.id)
    if(!user){
        res.status(400);
        throw new Error("User is not found")
    }
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json(user)
})


module.exports = {getAllUsers,createUser,updateUser,deleteUser,updateProducts}