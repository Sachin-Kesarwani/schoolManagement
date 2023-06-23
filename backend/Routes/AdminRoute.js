let {Router}=require("express")

let adminRoutes=Router()
let jwt=require("jsonwebtoken")
var bcrypt = require('bcryptjs');
const AdminModel = require("../Models/Admin");
const {adminmiddleware,checkadmin }= require("../Middleware/AdminMiddleware");
adminRoutes.get("/",async(req,res)=>{
    res.status(200).send({msg:"admin basic routes"})
})
adminRoutes.get("/all",checkadmin,async(req,res)=>{

try {
    let alldata=await AdminModel.find()
    res.status(200).send({msg:"Successfully get All admins",data:alldata})
} catch (error) {
    res.status(400).send({msg:"Something went wrong"})
}
})
adminRoutes.post("/addAdmin",adminmiddleware,checkadmin,async(req,res)=>{
    //Followin commetout should be req body
    // let data={
    //     name:"Uzair Sheikh",
    //     email:"uzairsheikh@gmail.com",
    //     position:"Manager",
    //     password:"uzairsheikh",
    //     salary_permoth:10000
    // }
   
    let admindata=req.body
       let allsalary={ january:false,
        february:false,
        march:false,
        april:false,
        may:false,
        june:false,
        july:false,
        august:false,
        september:false,
        october:false,
        november:false,
        december:false,
        delete_Admin:false}
        admindata={...admindata,...allsalary}
    try {
        bcrypt.hash(admindata.password, 8,async function(err, hash) {
          admindata.password=hash
          let saveadmin=new AdminModel(admindata)
         await saveadmin.save()
         res.status(200).send({msg:"Successfully Added New One"})
        });
    } catch (error) {
        res.status(400).send({msg:"Something went wrong"})
    }
})

adminRoutes.post("/loginadmin",async(req,res)=>{
    let reqdata=req.body
   
      try {
        let storeadmin=await AdminModel.find({email:reqdata.email})
     
        if(storeadmin.length>0){
            bcrypt.compare(reqdata.password,storeadmin[0].password, function(err, result) {
              
                 if(result){
                     let data= storeadmin[0]
         
                   
                      let token = jwt.sign({ adminid: data._id,position:data.position}, process.env.secretkey,{ expiresIn: "7d" });
                      res.status(200).send({"msg":`Successfully Login ${data.position}`,data:storeadmin[0],token,token})
                 }else{
                     res.status(400).send({"msg":"password is wrong"})
                 }
             });
        }else{
            res.status(404).send({"msg":"Not found"}) 
        }
      } catch (error) {
        res.status(400).send({"msg":"Something Went wrong"})
      }
})

adminRoutes.patch("/updateAdmin/:id",async (req,res)=>{
let data=req.body
let {id}=req.params
        try {
            await AdminModel.findByIdAndUpdate({_id:id},data)
            res.status(200).send({msg:"Successfully Updated "})
        } catch (error) {
            res.status(400).send({msg:"Something went wrong"})
        }
})

adminRoutes.delete("/deleteAdmin/:id",async(req,res)=>{
    let {id}=req.params
  try {
    await AdminModel.findByIdAndUpdate({_id:id},{delete_Admin:true})
    res.status(200).send({msg:"Sucessfully removed from your School"})
  } catch (error) {
    res.status(400).send({msg:"Something went wrong"})
  }
})

module.exports=adminRoutes