let {Router}=require("express")
let paymentRoute=Router()
require("dotenv").config()
const Razorpay = require("razorpay");
const { paymentMiddleware } = require("../Middleware/paymentmiddleware");
const AdminModel = require("../Models/Admin");
const { sentemailAfterPayment } = require("./Mail/Payment");

paymentRoute.post("/pay",async (req, res) => {
    let {salary_amount}=req.body
    console.log(salary_amount,11)
  
    try {
      const maximumAmount = 5000000; // Define the maximum allowed amount

      if (salary_amount > maximumAmount) {
        return res.status(400).send({
        msg:"Amount is So large "
        });
      }
        // console.log(1, process.env.RAZOR_keyID, process.env.RAZPR_secretKEy)
        const instance = new Razorpay({
            key_id: "rzp_test_0ml2Do2xSO01b9",
            key_secret: "Zx7bBVXhm2P5JBbprqKrq6cY",
        });
     
        const options = {
            amount: salary_amount*100, // amount in smallest currency unit
            currency: "INR",
            receipt: "receipt_order_74394",
        };
 
        const order = await instance.orders.create(options);

        if (!order) return res.status(500).send("Some error occured");
     
        res.json(order);
    } catch (error) {
        console.log(error)
        res.status(500).send(error);
    }
});



paymentRoute.post("/success",async(req,res)=>{
  let { salary_amount,idofAdmin,month,name,email}=req.body

  try {
    if(month==="all"){
      let fees={ january:true,
        february:true,
        march:true,
        april:true,
        may:true,
        june:true,
        july:true,
        august:true,
        september:true,
        october:true,
        november:true,
        december:true,
     }
      let data=await AdminModel.findByIdAndUpdate({_id:idofAdmin}, { new: true } )
    
      sentemailAfterPayment(name,email,salary_amount,"all")
      res.status(200).send({msg:"Paid",data:data})
    }else{
      let data=await AdminModel.findByIdAndUpdate({_id:idofAdmin},{[month]:true}, { new: true } )
    
     sentemailAfterPayment(name,email,salary_amount,month)
      res.status(200).send({msg:"Paid",data:data})
    }
   
  } catch (error) {
    console.log(error)
  }
   

})
module.exports=paymentRoute