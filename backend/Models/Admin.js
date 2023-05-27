let mongoose=require("mongoose")
let UserSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    position:{type:String,required:false}
})

let  SignupModel=mongoose.model("admin",UserSchema)
module.exports= SignupModel