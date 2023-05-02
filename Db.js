const mongoose= require('mongoose')
require("dotenv").config();

const Connection = mongoose.connect(process.env.ConnectionURL)



module.exports={
    Connection
}