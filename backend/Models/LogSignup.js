let mongoose=require("mongoose")
let UserSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
})

let  SignupModel=mongoose.model("user",UserSchema)
module.exports= SignupModel