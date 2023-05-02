const{Post}=require('../Models/post.model')

const getallpost=async(req,res)=>{
console.log(req.body.userId)
    try {
        let getallpost = await Post.find({userId:req.body.userId})
        res.status(200).send(getallpost)
    } catch (error) {
        res.status(400).send(error)
    }

}

const createpost=async(req,res)=>{
    try {
        const newpost = new Post(req.body)
        await newpost.save()
        res.status(200).send("New Post created")
    } catch (error) {
        res.status(400).send("Something Went Wrong")        
    }

}


const updatepost=async(req,res)=>{
    const{ id }=req.params
   try {   
     const updatingpost= await Post.find({_id:id})
        if(req.body.userId !== updatingpost[0].userId){
            res.send("you are not eligible to update the post")
        }else{
            const updatedpost= await Post.findByIdAndUpdate({_id:id},req.body,{new:true})
            res.status(200).send("post updated")
        }     
    } catch (error) {
        res.status(400).send(error)      
    }

}


const deletepost=async(req,res)=>{

    const{ id }=req.params
    try {   
      const updatingpost= await Post.find({_id:id})
         if(req.body.userId !== updatingpost[0].userId){
             res.send("you are not eligible to delete the post")
         }else{
             await Post.findByIdAndDelete({_id:id})
             res.status(200).send("post deleted")
         }     
     } catch (error) {
         res.status(400).send(error)      
     }

}

module.exports={
    getallpost,createpost,updatepost,deletepost
}