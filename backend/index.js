let express=require("express")
const connection = require("./connection")
let app=express()
require("dotenv").config()

app.get("/",(req,res)=>{
    res.status({msg:"SchoolManagement home"})
})

app.listen(process.env.port,async()=>{
try {
    await connection
    console.log("Connected to atlas")
} catch (error) {
    console.log("Error In Connection")
}
console.log("Server is running at",process.env.port)
})