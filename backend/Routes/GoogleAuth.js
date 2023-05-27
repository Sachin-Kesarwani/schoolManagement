let {Router}=require("express")
require("dotenv").config()
let googleRouter=Router()
var bcrypt = require('bcryptjs');
let passport=require("passport")
var jwt = require('jsonwebtoken');
const SignupModel = require("../Models/LogSignup")
googleRouter.get("/",(req,res)=>{
    res.send({msg:"Google auth home"})
})

let GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID:process.env.GOOGLE_CLIENT_ID,
    clientSecret:process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8080/google/auth/google/callback"
  },
 async function(accessToken, refreshToken, profile, cb) {
     let data={
        email:profile._json.email,
        name:profile._json.name,
        password:profile.id
     }
     let storeddata=await SignupModel.find({email:data.email})
      let result;
        if(storeddata.length==0){
          
            bcrypt.hash(data.password, 8,async function(err, hash) {
                data.password=hash
                let postdata=new SignupModel(data)
                await postdata.save()
                let storeddata=await SignupModel.findOne({email:data.email})
                delete data.password
             
                let token = jwt.sign({ userid: storeddata._id}, process.env.secretkey,{ expiresIn: "7d" });
                
              result={"msg":"Successfully Signup1",data:data,token:token}
            });
        }else{
          
            let storeddata=await SignupModel.findOne({email:data.email})
            let token = jwt.sign({ userid: storeddata._id}, process.env.secretkey,{ expiresIn: "7d" });
            delete data.password
            result={"msg":"Successfully Signup2",data:storeddata,token:token}
        }
    //  console.log(obj)
    return cb(null,result)
    //108486542572536241858
    // User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //   return cb(err, user);
    // });
  
  }
));

googleRouter.get('/auth/google',passport.authenticate('google', { scope: ['profile',"email"] }));

googleRouter.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login',session:false }),
  function(req, res) {
   console.log(re.user)
    // res.send(req.user)
    // res.status(200).send({msg:"Signup with Google",...req.user})

  });
module.exports=googleRouter