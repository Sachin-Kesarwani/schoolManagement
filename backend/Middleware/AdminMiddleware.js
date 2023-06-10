const AdminModel = require("../Models/Admin")



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

module.exports=adminmiddleware