const express = require("express")
const Adminrouter = express.Router()


Adminrouter.use((req,res,next)=>{
let {email,password}=req.body

try {
        if(email=="uzair@gmail.com" && password=="uzair"){
        next()
        }else{
            res.status(400).send({"msg":"User not Authenticated"})
        }
    } catch (error) {
        res.status(400).send({"msg":error.message})  
    }

})

module.exports={
    Adminrouter
}