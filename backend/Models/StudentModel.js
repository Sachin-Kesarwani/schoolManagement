const mongoose = require("mongoose")


const studentSchema = mongoose.Schema({
    name: {type:String,required:true},
    fatherName: {type:String,required:true},
    motherName: {type:String,required:true},
    class: {type:Number,required:true},
    address: {type:String,required:true},
    aadhar: {type:Number,required:true},
    contact:{type:Number,required:true},
    DOB: {type:String,required:true},
    transport: {type:Boolean,required:true},
    userid: {type:String,required:true},
    Status: {type:Boolean,required:true},
    test_score: {type:Number,required:true},
    transport_driver: {type:String,required:false},
    transport_conductor: {type:String,required:false},
    class_teacher: {type:String,required:false},
    class_teacher_id: {type:String,required:false},
})


const StudentModel = mongoose.model("TempStudentdata",studentSchema)

module.exports = {
    StudentModel
}