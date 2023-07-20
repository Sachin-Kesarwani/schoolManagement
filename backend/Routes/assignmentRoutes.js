let {Router}=require("express")
const assignmentModel = require("../Models/Assignment.model")
const {assignmentmiddleware,CheckingStudentIsinourSchool} = require("../Middleware/assignmentmiddleware")

let assignmentRouter=Router()

assignmentRouter.get("/all",CheckingStudentIsinourSchool,async(req,res)=>{
    let {student_class}=req.query

        try {
           let allAssignments=await assignmentModel.find({class:Number(student_class)})
           if(allAssignments.length>0){
            for(let i=0;i<allAssignments.length;i++){
                const currentDate = new Date();
            
                let assignmentDate=new Date(allAssignments[i].timeLine)
                if ( assignmentDate< currentDate) {
             
                    allAssignments[i].endAssignment=true
                   
                  } 
            }

            res.status(200).send({msg:"All Assignments",allAssignments})
           } else{
            res.status(404).send({msg:"Not found"})
           }
        
        } catch (error) {
            res.status(400).send({msg:"Something went wrong"})
        }
})

assignmentRouter.get("/allAssinmentsForAdmin",assignmentmiddleware,async(req,res)=>{
  let {role,student_class}=req.query

if(role===undefined){
    role="all"
    console.log("if1")
}
if(student_class===undefined){
    student_class="all"
    console.log("if2")
}
console.log(role,student_class)
try {
    if(role==="all"){
     let alldata=await assignmentModel.find({class:Number(student_class)})

     if(alldata.length!==0){
        res.status(200).send({msg:`All Assignments whose class ${student_class}`,data:alldata})

     }else{
     res.status(404).send({msg:`Not Found`,data:[]})

     }
    }else if(student_class==="all"){
        let alldata=await assignmentModel.find({teacher:role})
        if(alldata.length!==0){
            res.status(200).send({msg:`All Assignments with Role ${role}`,data:alldata})

    
         }else{
         res.status(404).send({msg:`Not Found`,data:[]})
    
         }
    }else{
      
        let alldata=await assignmentModel.find({teacher:role,class:Number(student_class)})
   
        if(alldata.length>0){
            res.status(200).send({msg:`All Assignments whose class is ${student_class} and Role ${role}`,data:alldata})


    
         }else{
         res.status(404).send({msg:`Not Found`,data:[]})
    
         }
    }
} catch (error) {
    res.status(400).send({msg:"Something Went Wrong"})
}

})
assignmentRouter.post("/add",assignmentmiddleware,async(req,res)=>{
//data={
//     "class":9,
//     "teacher":"Amit",
//     "assignmet_topic":"Environment Study",
//     "assignment":[{"tag":"p","message":"Hellow world "},{"tag":"h1","message":"Hellow world wwwwwwwddd"},{"tag":"h5","message":"Hellow worldwwwwwwwwwwwwwwwwwww "}]
// }
    let data=req.body
  
    data={...data,endAssignment:false}

    try {
        let addAssignment=new assignmentModel(data)
      await addAssignment.save()
       

            res.status(200).send({msg:"Success fully Added Assignment",data:addAssignment})
    } catch (error) {
       res.status(400).send({msg:"Something went wrong"}) 
    }
})
assignmentRouter.patch("/update/:id",assignmentmiddleware,async(req,res)=>{
    let {id}=req.params
    let data=req.body

        try {
            await assignmentModel.findByIdAndUpdate({_id:id},data)
            res.status(200).send({msg:"Successfully updated"})
        } catch (error) {
            res.status(400).send({msg:"Something went wrong"})
        }
})
assignmentRouter.delete("/delete/:id",assignmentmiddleware,async(req,res)=>{
    let {id}=req.params
  

        try {
            await assignmentModel.findByIdAndDelete({_id:id})
            res.status(200).send({msg:"Successfully Deleted"})
        } catch (error) {
            res.status(400).send({msg:"Something went wrong"})
        }
})





module.exports=assignmentRouter