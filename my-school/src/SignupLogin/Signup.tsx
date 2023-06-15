import React, { useState } from 'react';
import './SignupForm.css'; // Import the CSS file
import { useAppDispatch } from '../Redux/Store';
import { signup } from '../Redux/AuthRedux/action';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
let signupformdata={
  name:"",
  email:"",
  password:""
}
const SignupForm = () => {
let [formdata,setformdata]=useState(signupformdata)
let [loading,setLoading]=useState(false)
let [disabledbutton,setdisabled]=useState(false)
let navigate=useNavigate()
let dispatch=useAppDispatch()
  const handleSubmit = (e:any) => {
    e.preventDefault();
    setLoading(true)
dispatch(signup(formdata)).then((res:any)=>{
if(res.status===200){
  setdisabled(true)
}
  console.log(res)
  setLoading(false)
  Cookies.set('SchooleManagementUserData',JSON.stringify(res.data.data) );
  Cookies.set('SchooleManagementUserToken',JSON.stringify(res.data.token) );
  handleToastClick(res.data.data.name)
  
  // let data:string|undefined=(Cookies.get('SchooleUserData'))
  // if(data!==undefined){
  //   console.log(JSON.parse(data))
  // }
 
})
  };
  const handleToastClick = (name:string) => {
    toast.success(`🦄 Successfully Signup ! ${name}`, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
      setTimeout(()=>{
      navigate("/")
      },5000)
    
  };
  return (
    <div className="container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={formdata.name}
          onChange={(e) => setformdata({...formdata,name:e.target.value})}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={formdata.email}
          onChange={(e) => setformdata({...formdata,email:e.target.value})}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={formdata.password}
          onChange={(e) => setformdata({...formdata,password:e.target.value})}
          required
        />
        <button type="submit">{loading?<div className="custom-loader"></div>:"Signup"}</button>
      </form>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
/>

    </div>
  );
};

export default SignupForm;
