import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import {dbConnect} from './config/dbConnect.js'
import userRoutes from './routes/userRoutes.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()
dbConnect()
const PORT=process.env.PORT || 5000

const app=express()
app.use(cors())
app.use(express.json())

app.use('/users',userRoutes)
app.use('/products',productRoutes)

app.listen(PORT, ()=>{
    console.log(`Server is running on Port ${PORT}`)
})