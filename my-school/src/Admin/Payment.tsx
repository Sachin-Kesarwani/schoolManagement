import React ,{useEffect}from "react";

import axios from "axios";
import { Button } from "antd";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { useAppDispatch } from "../Redux/Store";
import { editAfterAdminPayment } from "../Redux/AdminRedux/admin.type";
import { GetAllTeacheresFromServer } from "../Redux/AdminRedux/action";
declare global {
    interface Window {
      Razorpay: any;
    }
  }
function Payment({salaryStatus,salary_amount,month,idofAdmin,name,email}:{salaryStatus:boolean,salary_amount:Number,month:string,idofAdmin:String,name:string,email:string}) {

    let dispatch=useAppDispatch()
    function loadScript(src:any) {
        return new Promise((resolve) => {
            const script = document.createElement("script");
            script.src = src;
            script.onload = () => {
                resolve(true);
            };
            script.onerror = () => {
                resolve(false);
            };
            document.body.appendChild(script);
        });
    }

    async function displayRazorpay() {
        console.log(name)
        let token = Cookies.get("SchooleManagementAdminToken");
        const res = await loadScript(
            "https://checkout.razorpay.com/v1/checkout.js"
        );
  
        if (!res) {
            alert("Razorpay SDK failed to load. Are you online?");
            return;
        }
        let info={salary_amount,month}
        const result = await axios.post("http://localhost:8080/payment/pay",info,{headers:{Authorization:`Bearer ${token }`}});

        if (!result) {
            alert("Server error. Are you online?");
            return;
        }
 
        const { amount, id: order_id, currency } = result.data;
console.log(amount,order_id,currency)
        const options = {
            key: "rzp_test_0ml2Do2xSO01b9", // Enter the Key ID generated from the Dashboard
            amount: amount.toString(),
            currency: currency,
            name: "Chalo School",
            description: "Transaction",
        
            order_id: order_id,
            handler: async function (response:any) {
                const data = {
                    orderCreationId: order_id,
                    razorpayPaymentId: response.razorpay_payment_id,
                    razorpayOrderId: response.razorpay_order_id,
                    razorpaySignature: response.razorpay_signature,
                    salary_amount,month,idofAdmin,name,email

                };
               
                const result = await axios.post("http://localhost:8080/payment/success", data);
                  console.log(result)
                  if(result.request.status===200){
                  //  dispatch({type:editAfterAdminPayment,payload:result.data.data})
                  dispatch(GetAllTeacheresFromServer("all"))
                  }
                // alert(result.data.msg);
            },
            prefill: {
                name: "Soumya Dey",
                email: "SoumyaDey@example.com",
                contact: "9999999999",
            },
            notes: {
                address: "Soumya Dey Corporate Office",
            },
            theme: {
                color: "#61dafb",
            },
        };

        const paymentObject = new window.Razorpay(options);
        paymentObject.open();
    }

useEffect(()=>{
    if(month==="all"){
        console.log(salaryStatus,salary_amount)
    }
},[])
    return (
      
          
                <Button style={{color:"black"}} disabled={salaryStatus} onClick={displayRazorpay}>
                 {salaryStatus?"Paid":"PAY"} {month==="all"?"Full Salary":""}
                </Button>
           
     
    );
}

export default Payment


