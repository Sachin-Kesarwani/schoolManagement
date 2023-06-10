const AdminModel = require("../Models/Admin")
let jwt=require("jsonwebtoken")


async function adminmiddleware(req,res,next){
    let admindata=req.body
    try {
        let storeddata=await AdminModel.find({email:admindata.email})
        if(storeddata){
          res.status(200).send({msg:"This user is already exist"})
        }else{
         next()
        }
    } catch (error) {
        res.status(400).send({msg:"Something went wrong"})
    }
}


async function checkadmin(req,res,next){
 let token=req?.headers?.authorization?.split(" ")[1]
    var decoded = jwt.verify(token, process.env.secretkey);
  console.log(decoded)
        try {
            if(decoded.position==="Manager"){
                next()
            }else{
              res.status(404).send({msg:"You are not authorized"})
            }
        } catch (error) {
            res.status(400).send({msg:"Something Went Wrong"})
        }
}

module.exports={adminmiddleware,checkadmin}