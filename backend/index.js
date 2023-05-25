let express=require("express")
const connection = require("./connection")
const userRoute = require("./Routes/LoginSignup")
let app=express()
let cors=require("cors")
const mailRouter = require("./Routes/MailRoute")
require("dotenv").config()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.status(200).send({msg:"SchoolManagement home"})
})
app.use("/user",userRoute)
app.use("/mail",mailRouter)

app.listen(process.env.port,async()=>{
try {
    await connection
    console.log("Connected to atlas")
} catch (error) {
    console.log("Error In Connection")
}
console.log("Server is running at",process.env.port)
})