const mongoose = require("mongoose")

// values.parents_image=parentImageURl
// values.student_image=studentImageURL
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
    transport_from: {type:String,required:false},
    transport_to: {type:String,required:false},
    parents_image:{type:String,required:false},
    student_image:{type:String,required:false},
     //////////////Following data is not need to pass in the body////////////////////
    userid: {type:String,required:true},
    status: {type:Boolean,required:true},
    transport_driver: {type:String,required:false},
    transport_conductor: {type:String,required:false},
    class_teacher: {type:String,required:false},
    class_teacher_id: {type:String,required:false},
    transport_per_month_fees:{type:Number,required:false},
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
    transport_fees_january:{type:Boolean,required:false},
    transport_fees_february:{type:Boolean,required:false},
    transport_fees_march:{type:Boolean,required:false},
    transport_fees_april:{type:Boolean,required:false},
    transport_fees_may:{type:Boolean,required:false},
    transport_fees_june:{type:Boolean,required:false},
    transport_fees_july:{type:Boolean,required:false},
    transport_fees_august:{type:Boolean,required:false},
    transport_fees_september:{type:Boolean,required:false},
    transport_fees_october:{type:Boolean,required:false},
    transport_fees_november:{type:Boolean,required:false},
    transport_fees_december:{type:Boolean,required:false},
})


const StudentModel = mongoose.model("Studentdata",studentSchema)

module.exports = {
    StudentModel
}