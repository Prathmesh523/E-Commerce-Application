import Product from '../models/productModel.js'

export const allProducts = async (req, res) => {
    try {
        const products = await Product.find({})
        return res.json({ status: true, message: "Products Found", products })
    } catch (error) {
        console.log(error)
        return res.json({ status: false, message: "Some error occured" })
    }
}

export const getProductByCategory = async (req, res) => {
    try {
        const category = req.body
        const products = await Product.find({ category })
        if (products) {
            return res.json({ status: true, message: "Products Found", products })
        }
        else {
            return res.json({ status: false, message: "No Products Found" })
        }
    } catch (error) {
        console.log(error)
        return res.json({ status: false, message: "Some error occured" })
    }
}

export const createProduct = async (req, res) => {
    try {
        const [title, price, description, category, image, rating] = req.body   

        const product = await Product.create({
            title, price, description, category, image, rating
        })
        if (product) {
            return res.json({ status: true, message: "Product added successfully" })
        }
        else {
            return res.json({ status: false, message: "Some error occured" })
        }

    } catch (error) {
        console.log(error)
        return res.json({ status: false, message: "Some error occured" })
    }
}

export const updateProduct = async (req, res) => {
    try {
        const [title, price, description, category, image, rating] = req.body   

        const product = await Product.updateOne(title, {
            title, price, description, category, image, rating
        })
        if (product) {
            return res.json({ status: true, message: "Product updated successfully" })
        }
        else {
            return res.json({ status: false, message: "Some error occured" })
        }
    } catch (error) {
        console.log(error)
        return res.json({ status: false, message: "Some error occured" })
    }
}

export const deleteProduct = async (req, res) => {
    try {
        const [itemTitle] = req.body   
        const title=itemTitle
        const product = await Product.deleteOne({
            title
        })
        if (product) {
            return res.json({ status: true, message: "Product deleted successfully" })
        }
        else {
            return res.json({ status: false, message: "Some error occured" })
        }
    } catch (error) {
        console.log(error)
        return res.json({ status: false, message: "Some error occured" })
    }
}