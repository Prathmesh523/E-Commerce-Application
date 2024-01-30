import express from 'express'
import { getId, getRole, userLogin, userRegister } from '../controllers/userController.js'

const router=express.Router()

router.post('/getrole', getRole)
router.post('/getid', getId)
router.post('/register',userRegister)
router.post('/login', userLogin)

export default router 