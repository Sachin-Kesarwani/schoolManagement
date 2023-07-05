
let jwt=require("jsonwebtoken")

function paymentMiddleware(req,res,next){
    console.log("hii")
    let token=req?.headers?.authorization?.split(" ")[1]
   
    jwt.verify(token, process.env.secretkey,async function(err, decoded) {
   
      if(decoded){
       let storedadmin=await AdminModel.findOne({_id:decoded.adminid})
       console.log(storedadmin)
        if(storedadmin&&storedadmin.position==="Admin"){
       
           
            next()
        }else{
            res.status(400).send({"msg":"Not Authorised"})
        }
      }else{
        res.status(400).send({"msg":"Not Authorized"})
      }
       
      });
}

module.exports={paymentMiddleware}