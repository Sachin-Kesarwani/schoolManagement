let mongoose=require("mongoose")
let UserModel=mongoose.model({
    name:String,
    email:String,
    password:String
})

let UserSchema=mongoose.Schema("user",UserModel)
module.exports=UserModel