import Cart from '../models/cartModel.js'
import mongoose from 'mongoose'

export const getAllProducts=async(req,res)=>{
    try {
        const [user_id]=req.body
        const products=await Cart.find({user_id})
        if(products)
        {
            return res.json({status:true, message:"Data sent successfully", products})
        }
        else
        {
            return res.json({ status: false, message: "Some error occured" })
        }
    } catch (error) {
        console.log(error)
        return res.json({ status: false, message: "Some error occured" })
    }
}

export const createProduct=async(req,res)=>{
    try {
        const [userId, itemTitle, itemPrice, itemDescription, itemImage, itemRating]=req.body
        
        const [user_id, title, price, description, image, rating]=[userId, itemTitle, itemPrice, itemDescription, itemImage, itemRating]
        const product=await Cart.create({user_id, title, price, description, image, rating})
        if(product)
        {
            return res.json({status:true, message:"Product added successfully"})
        }
        else
        {
            return res.json({ status: false, message: "Some error occured" })
        }
    } catch (error) {
        console.log(error)
        return res.json({ status: false, message: "Some error occured" })
    }
}

export const deleteProduct=async(req,res)=>{
    try {
        const [userId, itemTitle]=req.body
        const user_id=userId
        const title=itemTitle
        const details=await Cart.deleteOne({user_id, title})
        if(details)
        {
            return res.json({ status: true, message: "Product deleted successfully" })
        }
        else
        {
            return res.json({ status: false, message: "Some error occured" })
        }
    } catch (error) {
        console.log(error)
        return res.json({ status: false, message: "Some error occured" })
    }
}