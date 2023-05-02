const express = require('express')
const { getallpost, createpost,updatepost,deletepost } = require('../Controllers/post.controllers')
const { Auth } = require('../Middleware/Auth')
const postRouter = express.Router()


postRouter.get('/',Auth,getallpost)
postRouter.post('/create',Auth,createpost)
postRouter.patch('/update/:id',Auth,updatepost)
postRouter.delete('/delete/:id',Auth,deletepost)



module.exports={
    postRouter
}