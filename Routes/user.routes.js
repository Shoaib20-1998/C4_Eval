const express = require('express')
const { UserRegister, UserLogin } = require('../Controllers/user.controllers')
const userRouter = express.Router()


userRouter.post('/register',UserRegister)
userRouter.post('/login',UserLogin)


module.exports={
    userRouter
}