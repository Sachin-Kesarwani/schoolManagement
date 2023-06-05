let {Router}=require("express")
let nodemailer=require("nodemailer")
let mailRouter=Router()
require("dotenv").config()
let Mailgen=require("mailgen")
mailRouter.get("/",(req,res)=>{
    res.status(200).send({msg:"Mail home"})
})
mailRouter.post("/send/signup",(req,res)=>{
   // {"name":"Uzair Sheikh","message":"School Management","email": "sachin.kesarwani67890@gmail.com"}
    let data=req.body
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
            name: `${data.name}`,
            intro: `Welcome to ${data.message}!\nWe are delighted to welcome you to our community! Thank you for signing up with us.`,
          
            outro: 'We hope you have a wonderful time connecting, learning, and exploring all that our platform has to offer.'
        }
    }
    let mail = MailGenerator.generate(response)
    let message = {
        from :process.env.email ,
        to :data.email,
        subject: "Successfully Signup",
       
        html: mail
    }
    transporter.sendMail(message).then(() => {
        return res.status(201).send({
            msg: "you should receive an email"
        })
    }).catch(error => {
       
        return res.status(500).send({ error })
    })
})
mailRouter.post("/send/admitted",(req,res)=>{
    //{"name":"Uzair Sheikh","email": "sachin.kesarwani67890@gmail.com"}
    let data=req.body
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
            name: `${data.name}`,
            intro: `We hope this email finds you in good health and high spirits. We are delighted to introduce you to ${process.env.product_name}, a place where young minds flourish and dreams come to life.`,
          
            outro: "We are thrilled to inform you that your child's admission to our school has been successfully approved. Welcome to our educational family! We can't wait to embark on this exciting journey together."
        }
    }
    let mail = MailGenerator.generate(response)
    let message = {
        from :process.env.email ,
        to :data.email,
        subject: "Successful Admission for Your Child!",
       
        html: mail
    }
    transporter.sendMail(message).then(() => {
        return res.status(201).send({
            msg: "you should receive an email"
        })
    }).catch(error => {
       
        return res.status(500).send({ error })
    })
})
mailRouter.post("/send/requsetapproved",(req,res)=>{
    //{"name":"Uzair Sheikh","email": "sachin.kesarwani67890@gmail.com"}
    let data=req.body
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
            link : process.env.product_link_request
        }
    })
    let response = {
        body: {
            name: `${data.name}`,
            intro: `We hope this email finds you in good health and high spirits. `,
          
            outro: "We are thrilled to inform you that whatever the changes you want for your child's has been successfully changed and now onward you can check it on the request section ."
        }
    }
    let mail = MailGenerator.generate(response)
    let message = {
        from :process.env.email ,
        to :data.email,
        subject: "Successfully Request Approved",
       
        html: mail
    }
    transporter.sendMail(message).then(() => {
        return res.status(201).send({
            msg: "you should receive an email"
        })
    }).catch(error => {
       
        return res.status(500).send({ error })
    })
})

module.exports=mailRouter