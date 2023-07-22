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
const cloudinary = require('cloudinary')
const { CloudinaryStorage } = require('multer-storage-cloudinary');


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
  api_secret: '4YKk4aIhzr2NEz638MXvfHT_HUY',
  secure: true,
});
app.use(express.urlencoded({ extended: true }));
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: './uploads', // Optional: Change this to your desired folder name in Cloudinary
    },
  });
  const upload = multer({ storage: storage });
  
  // Define a route to handle image uploads
  // app.post("/upload",(req,res)=>{
  //   console.log("hii")
  //   res.send("hii")
  // })  
  app.post("/upload",upload.single('image'), (req, res) => {
    // Check if a file was provided in the request
    console.log("hiii")
    if (req.file) {
      // If an image was uploaded successfully, return its Cloudinary URL
      res.status(200).json({ imageUrl: req.file.path });
    } else {
      // If no image was provided, return an error message
      res.status(400).json({ message: 'No image file provided' });
    }
  });
  
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