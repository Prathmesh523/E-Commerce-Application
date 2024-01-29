import express from 'express'
import { allProducts, createProduct, deleteProduct, getProductByCategory, updateProduct } from '../controllers/productController.js'

const router=express.Router()

router.get('/allproducts',allProducts)
router.post('/getproduct', getProductByCategory)
router.post('/create',createProduct)
router.post('/update',updateProduct)
router.post('/delete',deleteProduct)

export default router