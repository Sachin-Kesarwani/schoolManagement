let mongoose=require("mongoose")
let AdminSchema=mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    position:{type:String,required:false},
    salary_permoth:{type:Number,require:true},
    preferred_subject:{type:String,required:false},
    delete_Admin:Boolean,
    january:Boolean,
    february:Boolean,
    march:Boolean,
    april:Boolean,
    may:Boolean,
    june:Boolean,
    july:Boolean,
    august:Boolean,
    september:Boolean,
    october:Boolean,
    november:Boolean,
    december:Boolean
})

let  AdminModel=mongoose.model("admin",AdminSchema)
module.exports= AdminModel