let mongoose=require("mongoose")
let RequestSchema=mongoose.Schema({
    userid:String,
    student_id:String,
    category:String,
    previous_data:String||number,
    new_data:String||number,
    status:Boolean,
    message:String
    }
    )

let  RequestModel=mongoose.model("userRequest",RequestSchema)
module.exports= RequestModel