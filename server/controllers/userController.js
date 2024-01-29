import User from '../models/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const userRegister=async(req,res)=>{
    try {
        const [username, email, password]=req.body
        if(!username || !email || !password)
        {
            return res.json({status:false, message:"All fields are mandatory"})
        }
        const userCheck=await User.findOne({email})
        if(userCheck)
        {
            return res.json({status:false, message:"User already registered"})
        }
        const hashedPassword=await bcrypt.hash(password,10)
        const user=await User.create({
            username,
            email,
            password:hashedPassword,
            role:0
        })
        if(user)
        {
            return res.json({status:true, message:"User Registered Successfully"})
        }   
        else
        {
            return res.json({status:false, message:"Some error occured"})
        }
    } catch (error) {
        console.log(error)
        return res.json({status:false, message:"Some error occured"})
    }
}

export const userLogin=async(req,res)=>{
    try {
        const [email,password]=req.body
        if(!email || !password)
        {
            return res.json({status:false, message:"All fields are mandatory"})
        }
        const userCheck=await User.findOne({email})
        if(userCheck)
        {
            const role=userCheck.role
            const compare=await bcrypt.compare(password,userCheck.password)
            if(compare)
            {
                const token=await jwt.sign({email,password,role},process.env.JWT_SECRET_KEY)
                return res.json({status:true, message:"User Logged In Successfully", token})
            }
            else
            {
                return res.json({status:false, message:"Incorrect Password"})
            }
        } 
        else{
            console.log(error)
            return res.json({status:false, message:"User Not Registered"})
        }
    } catch (error) {
        console.log(error)
        return res.json({status:false, message:"Some error occured"})
    }
}

export const getRole=async(req,res)=>{
    try {
        const [token]=req.body
        const data=await jwt.verify(token, process.env.JWT_SECRET_KEY).role
        return res.json({status:true, message:"Role sent", data})
    } catch (error) {
        console.log(error)
        return res.json({status:false, message:"Some error occured"})
    }
}