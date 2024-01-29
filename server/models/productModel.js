import mongoose, {Schema} from 'mongoose'

const productSchema= mongoose.Schema({
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
    category:{
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

})

export default mongoose.model('products',productSchema)