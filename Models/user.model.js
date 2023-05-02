
const mongoose= require('mongoose')

const Userschema = mongoose.Schema({
    name:String,
    email:String,
    gender:String,
    password:String
},{
    versionKey:false
})

const User = mongoose.model('user',Userschema)

module.exports={
    User
}