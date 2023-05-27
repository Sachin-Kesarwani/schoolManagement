


let {Router}=require("express")
const  SignupModel = require("../Models/LogSignup")
let userRoute=Router()
const path = require('path');

var bcrypt = require('bcryptjs');

var jwt = require('jsonwebtoken');
require("dotenv").config()
userRoute.get("/",(req,res)=>{
    res.status(200).send({"msg":"Sinup and Login Basic Route"})
})

userRoute.post("/signup",async(req,res)=>{
    let data=req.body
   
    try {
     
        let storeddata=await SignupModel.find({email:data.email})
      
        if(storeddata.length==0){
          
            bcrypt.hash(data.password, 8,async function(err, hash) {
                data.password=hash
                let postdata=new SignupModel(data)
                await postdata.save()
                let storeddata=await SignupModel.findOne({email:data.email})
                delete data.password
             
                let token = jwt.sign({ userid: storeddata._id}, process.env.secretkey,{ expiresIn: "7d" });
                
                 res.status(200).send({"msg":"Successfully Signup",data:data,token:token})
            });
        }else{
            res.status(400).send({"msg":"User Exist , Please Login "})
        }
    } catch (error) {
        console.log(error)
        res.status(400).send({"msg":"Something went wrong in Signup"})
    }
 })


userRoute.post("/login",async(req,res)=>{
    let data=req.body
   
    try {
    
        let storeddata=await SignupModel.find({email:data.email})
        if(storeddata.length>0){
          
            bcrypt.compare(data.password,storeddata[0].password, function(err, result) {
               
                if(result){
                    let data=storeddata[0]
        
                  
                     let token = jwt.sign({ userid: data._id}, process.env.secretkey,{ expiresIn: "7d" });
                     res.status(200).send({"msg":"Successfully Login",data:{email:data.email,name:data.name},token,token})
                }else{
                    res.status(400).send({"msg":"password is wrong"})
                }
            });

        
        }else{
            res.status(400).send({"msg":"You have not Signup till now"})
        }
    } catch (error) {
        res.status(400).send({"msg":"Something went wrong in login"})
    }


})

///////////////////////////////





 
 





userRoute.get("/details",(req,res)=>{
    let token=req.headers.authorization
    console.log(token)
    jwt.verify(token, process.env.secretkey, function(err, decoded) {
        console.log(decoded) 
        res.send(decoded)
      });
   
})
module.exports=userRoute