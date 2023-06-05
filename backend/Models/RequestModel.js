let mongoose=require("mongoose")
let RequestSchema=mongoose.Schema({
    userid:{type:String,require:true},
    student_id:{type:String,require:true},
    category:{type:String,require:true},
    previous_data:String||number,
    new_data:String||number,
    cancel_request:{type:Boolean,require:false},
    status:{type:Boolean,require:false},
    reason_message:{type:String,require:true}
    }
    )

let  RequestModel=mongoose.model("userRequest",RequestSchema)
module.exports= RequestModel