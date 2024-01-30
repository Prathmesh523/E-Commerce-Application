import mongoose, {Schema} from 'mongoose'

const cartSchema= mongoose.Schema({
    user_id:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    rating:{
        type:Object,
        required:true
    },
},{timestamps:true})

export default mongoose.model('cart',cartSchema)