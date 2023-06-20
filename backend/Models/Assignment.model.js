let mongoose=require("mongoose")

const singleassignment = new mongoose.Schema({
    tag: { type: String, required: true },
    message: { type: String, required: true }
  });

let assignmentSchema=mongoose.Schema({
    class:{type:Number,required:true},
    teacher:{type:String,required:true},
    assignmet_topic:{type:String,required:true},
    assignment: { type: [ singleassignment ], required: true },
    timeLine:{type:String,required:true},
    endAssignment:{type:Boolean,required:false}
})

let assignmentModel=mongoose.model("assignment",assignmentSchema)

module.exports=assignmentModel