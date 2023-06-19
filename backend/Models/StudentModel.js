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
    test_score: {type:Number,required:false},
     //////////////Following data is not need to pass in the body////////////////////
    userid: {type:String,required:true},
    Status: {type:Boolean,required:true},

    transport_driver: {type:String,required:false},
    transport_conductor: {type:String,required:false},
    class_teacher: {type:String,required:false},
    class_teacher_id: {type:String,required:false},
    january:{type:Boolean,required:false},
    february:{type:Boolean,required:false},
    march:{type:Boolean,required:false},
    april:{type:Boolean,required:false},
    may:{type:Boolean,required:false},
    june:{type:Boolean,required:false},
    july:{type:Boolean,required:false},
    august:{type:Boolean,required:false},
    september:{type:Boolean,required:false},
    october:{type:Boolean,required:false},
    november:{type:Boolean,required:false},
    december:{type:Boolean,required:false},
})


const StudentModel = mongoose.model("TempStudentdata",studentSchema)

module.exports = {
    StudentModel
}