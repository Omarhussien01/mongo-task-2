const express = require('express')
const app = express()
const dotenv= require('dotenv').config();
const userRouter = require('./routers/userRouter')
const productRouter = require('./routers/productRouter')
const connectDb = require('./config/dbConfig')

connectDb();
app.use(express.json())

app.use('/api/users',userRouter)
app.use('/api/product',productRouter)

app.listen(5000,()=>{
    console.log('Server is running on PORT 5000... ')
})