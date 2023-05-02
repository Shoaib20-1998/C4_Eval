
const mongoose= require('mongoose')

const Postschema = mongoose.Schema({
    title :String,
    body :String,
    device :String,
    userId:String
},{
    versionKey:false
})

const Post = mongoose.model('Post',Postschema)

module.exports={
    Post
}