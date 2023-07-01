let express=require("express")

const cors=require("cors")
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

let cliet_id="84065dd2cc85f9e31eea"
let client_secret="4a67244cd853e9a5bbb4b05b2eb57f0752743015"
let app=express()
app.use(cors())

app.get("/gettoken",async(req,res)=>{
   let {code}=req.query
   fetch(`https://github.com/login/oauth/access_token?client_id=${cliet_id}&client_secret=${client_secret}&code=${code}`,{
    method:"POST",
    headers:{
        Accept: "application/json"
    }
   }).then((re)=>re.json())
   .then((re=>{
   res.send(re)
   }))

})
app.get("/getuserdata",async(req,res)=>{
 await   fetch("https://api.github.com/user",{
    method:"GET",
    headers:{
        "Authorization":req.get("Authorization")
    }
 }).then((re)=>re.json()).then((re)=>{
    res.send(re)
 }).catch((er)=>{
    res.send(er)
 })
})
app.listen(8080,()=>{
    console.log("server is running at ",8080)
})