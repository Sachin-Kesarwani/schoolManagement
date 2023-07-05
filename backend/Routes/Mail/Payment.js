require("dotenv").config()
let nodemailer=require("nodemailer")

let Mailgen=require("mailgen")
function sentemailAfterPayment(name="John",email="sachin.kesarwani67890@gmail.com",salary_amount=0,month="all"){
     // {"name":"Uzair Sheikh","message":"School Management","email": "sachin.kesarwani67890@gmail.com"}
    // let data=req.body
     let config={
         service:"gmail",
         auth:{
             user:process.env.email,
             pass:process.env.pass
         }
     }
     let transporter=nodemailer.createTransport(config)
     let MailGenerator = new Mailgen({
         theme: "default",
         product : {
             name: process.env.product_name,
             link : process.env.product_link
         }
     })
     let response = {
         body: {
             name: `${name}`,
             intro: `Hello, ${name} , We hope you're doing well. We wanted to inform you that your salary ₹${salary_amount} for ${month} month has been successfully credited to your account. If you have any questions or concerns regarding your payment, please feel free to reach out to us.`,
           
             outro: 'Thank you for your hard work and dedication.'
         }
     }
     let mail = MailGenerator.generate(response)
     let message = {
         from :process.env.email ,
         to :email,
         subject: "Successfully Credited Salary",
        
         html: mail
     }
     transporter.sendMail(message)
    //  .then(() => {
    //      return res.status(201).send({
    //          msg: "you should receive an email"
    //      })
    //  }).catch(error => {
        
    //      return res.status(500).send({ error })
    //  })
}

module.exports={sentemailAfterPayment}