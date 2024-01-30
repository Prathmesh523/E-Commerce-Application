import express from 'express'
import { createProduct, deleteProduct, getAllProducts } from '../controllers/cartController.js'

const router=express.Router()

router.post("/create", createProduct)
router.post("/getall", getAllProducts)
router.post("/delete", deleteProduct)
export default router