import React, { useEffect, useState } from 'react';
import './SignupForm.css'; // Import the CSS file
import { useAppDispatch } from '../Redux/Store';
import { signup } from '../Redux/AuthRedux/action';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { Button, message, Space } from 'antd';
import { handleScrollToTop } from '../Important/scrollup';
let signupformdata={
  name:"",
  email:"",
  password:""
}
const SignupForm = () => {
let [formdata,setformdata]=useState(signupformdata)
let [loading,setLoading]=useState(false)
let [disabledbutton,setdisabled]=useState(false)
const [messageApi, contextHolder] = message.useMessage();

let navigate=useNavigate()
let dispatch=useAppDispatch()
  const handleSubmit = (e:any) => {
    e.preventDefault();
    setLoading(true)
dispatch(signup(formdata)).then((res:any)=>{
if(res.status===200){
  setdisabled(true)
  console.log(res)
  Cookies.set('SchooleManagementUserData',JSON.stringify(res.data.data) );
  Cookies.set('SchooleManagementUserToken',JSON.stringify(res.data.token) );
   
  handleToastClick(res.data.data.name)
  messageApi.open({
    type: 'success',
    content:`${res.data.msg} , ${res.data.data.name}`,
  });
}else{
  console.log(res)
  messageApi.open({
    type: 'warning',
    content: res.response.data.msg,
  });
  setTimeout(()=>{
    navigate("/login")
  },2000)

}
  
  setLoading(false)

  
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
  useEffect(()=>{
    handleScrollToTop()
      },[])
  return (
    <div className="container">
        {contextHolder}
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
        <button type="submit">{loading?"Signing...":"Signup"}</button>
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
