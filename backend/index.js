let express=require("express")
const connection = require("./connection")
const userRoute = require("./Routes/LoginSignup")
let app=express()
const cors = require('cors');
const mailRouter = require("./Routes/MailRoute")
const googleRouter = require("./Routes/GoogleAuth");

const { StudentRouter } = require("./Routes/StudentRoute");

const requestRoute = require("./Routes/RequestAuth");
const adminRoutes = require("./Routes/AdminRoute");
const assignmentRouter = require("./Routes/assignmentRoutes");
const paymentRoute = require("./Routes/PaymentROute");

const multer = require('multer');

const { CloudinaryStorage } = require('multer-storage-cloudinary');

let fs=require("fs")
const  {v2: cloudinary}=require('cloudinary');

require("dotenv").config()
app.use(express.json())
app.use(cors())
app.get("/",(req,res)=>{
    res.status(200).send({msg:"SchoolManagement home"})
})
app.use("/user",userRoute)
app.use("/mail",mailRouter)
app.use("/google",googleRouter)
app.use("/request",requestRoute)
app.use("/admin",adminRoutes)
app.use("/student",StudentRouter)
app.use("/assignment",assignmentRouter)
app.use("/payment",paymentRoute)
///////////////////////////////image upload/////////////////////////////////



          
cloudinary.config({ 
  cloud_name: 'dtorys7bi', 
  api_key: '723226371683247', 
  api_secret: '4YKk4aIhzr2NEz638MXvfHT_HUY' 
});
// cloudinary.config({ 
//   cloud_name: process.env.CLOUDNAME, 
//   api_key:process.env.CLOUDINARY_API_KEY, 
//   api_secret: process.env.CLOUDINARY_SECRET_KEY
// });
app.use(express.urlencoded({ extended: true }));


  // SET STORAGE
  var storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, './uploads')
      },
      filename: function (req, file, cb) {
      //   cb(null, file.originalname + '-' + Date.now()+".jpg")
      cb(null, Date.now()+ '-' +file.originalname )
      }
    })
   
  var upload = multer({ storage: storage })
  app.post("/uploadphoto",upload.single('myImage'),async(req,res)=>{
  
    let path=req.file.path
    console.log(req.file)
    console.log('hiii')
    console.log(process.env.CLOUDINARY_API_KEY)
    try {
      const result = await cloudinary.uploader.upload(path); // Upload image to Cloudinary
      let imageUrl = result.secure_url; // Get the URL of the uploaded image from Cloudinary
      console.log(imageUrl)
      fs.unlinkSync(path)
      res.status(201).send(imageUrl);
        // console.log(imageUrl,"54")  
        // let data=new imageModel({image:path})
        // await data.save()
        // res.send("uploaded")
    } catch (error) {
        res.send("error")
    }
   
  
})
///////////////////////////////////////////////////////////////////////////////
app.listen(process.env.port,async()=>{

try {
    await connection
    console.log("Connected to atlas")
} catch (error) {
    console.log("Error In Connection")
}
console.log("Server is running at",8080)
})