const express = require('express')
const { Connection } = require('./Db');
const { userRouter } = require('./Routes/user.routes');
const { postRouter } = require('./Routes/post.route');
const app = express()
const cors = require('cors')
app.use(express.json())
require("dotenv").config();
app.use('/users',userRouter)
app.use('/posts',postRouter)
app.use(cors())


app.listen(process.env.Port,async()=>{
    try {
        await Connection
        console.log("connected")
    } catch (error) {
        console.log(error)       
    }
})