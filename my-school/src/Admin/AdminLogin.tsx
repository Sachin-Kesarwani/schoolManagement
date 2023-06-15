import React, { useState } from 'react';

import { Button, Modal ,Input, Form} from 'antd';
import { EyeInvisibleOutlined, EyeOutlined, UserOutlined } from '@ant-design/icons';
import { loadinginter } from '../Redux/AuthRedux/action';
import { useAppDispatch } from '../Redux/Store';
import { LoginAdmin } from '../Redux/AdminRedux/action';


export interface LoginDataInter {
    email: string;
    password: string;
  }
  
  const initialData: LoginDataInter = {
    email: '',
    password: '',
  };
  
const AdminLogin = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  let [logindata, setLogindata] = useState<LoginDataInter>(initialData);
  let [loading,setLoading]=useState<Boolean>(false)
let dispatch=useAppDispatch()
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
setLoading(true)
dispatch(LoginAdmin(logindata)).then((res:any)=>{
    if(res.request.status===200){
        console.log(res)
        setLoading(false)
        setIsModalOpen(false);
    }else{
        console.log(res)
        setLoading(false)
    }
  
})

  
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
function handleChange(e: React.ChangeEvent<HTMLInputElement>){
setLogindata({...logindata,[e.target.name]:e.target.value})
}

  return (
    <>
      <p style={{cursor:"pointer"}} onClick={showModal}>
        Admin
      </p>
      <Modal  
      cancelButtonProps={{ style: { color: 'black' } }} 
       title="Admin Login" 
       open={isModalOpen} 
       onOk={handleOk} 
       onCancel={handleCancel}
       footer={[
        <Button key="cancel" onClick={handleCancel} style={{ color: 'white',backgroundColor:"red" }}>
          Cancel
        </Button>,
        <Button key="ok" onClick={handleOk} type="primary">
          
          {loading?"Loading...":"SignIn"}
        </Button>,
      ]}
       >
         <Form>
          <Form.Item label="Enter Email">
            <Input placeholder="Basic usage" name="email" onChange={handleChange} prefix={<UserOutlined  /> }/>
          </Form.Item>
          <Form.Item label="Password ">
            <Input type='password' placeholder="Basic usage" name="password" onChange={handleChange} prefix={< EyeInvisibleOutlined/>} />
          </Form.Item>
        </Form>
     
      </Modal>
    </>
  );
};

export default AdminLogin;