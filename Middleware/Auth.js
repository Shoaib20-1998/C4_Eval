
var jwt = require('jsonwebtoken');
const Auth =(req,res,next)=>{0 
    const token = req.headers.token
    if(token){
        jwt.verify(token.split(" ")[1], 'user', function(err, decoded) {
            if(decoded){
                req.body.userId=decoded.UserId
                next()
            }else{
                res.status(400).send("you Are not Authorized")
            }
        })
    }else{
        res.status(400).send("you Are not Authorized")
    }
   
    


}

module.exports={
    Auth
}