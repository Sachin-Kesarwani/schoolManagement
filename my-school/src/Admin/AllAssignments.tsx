
import { Form, Input, Select, Button, message } from 'antd';
import React, {  useState } from 'react';
import { useAppDispatch, useAppSelector } from '../Redux/Store';
import { SingleAssignment, inidataType } from '../utils/data.types';
import { Typography } from 'antd';
import { ReloadOutlined, UserOutlined } from '@ant-design/icons';
import "../admincss/assignment.css"
import axios from 'axios';
import { GetAllAssignmentsForAdmin } from '../Redux/AdminRedux/action';
import SingleAssignmentDiv from './SingleAssignment';
import LoadingModal from './Loading';
const { Text } = Typography;
const { Option } = Select;

const AllAssignments  = () => {
  const classNames = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5', 'Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10'];
  const [messageApi, contextHolder] = message.useMessage();
  let [loading,setLoading]=useState(false)
  let allteachers=useAppSelector((state) => (state.AdminReducer as inidataType).allTeacher)
  let alladmin=useAppSelector((state) => (state.AdminReducer as inidataType).alladmin)
let allassignment=useAppSelector((state) => (state.AdminReducer as inidataType).assignment)

  let dispatch=useAppDispatch()
  const onFinish = (values:any) => {
   setLoading(true)
   if(values.role===undefined){
   values.role="all"
   }else if(values.class===undefined){
   values.class="all"
   }

   dispatch(GetAllAssignmentsForAdmin(values)).then((res:any)=>{
console.log(res)
setLoading(false)
if(res.request.status===200){
   
  messageApi.open({
    type: 'success',
    content: res.data.msg,
  });
}else if(res.request.status===400){
  
  messageApi.open({
    type: 'error',
    content:  res.response.data.msg,
  });
}else if(res.request.status===401){
  messageApi.open({
    type: 'error',
    content: res.response.data.msg,
  });
}else if(res.request.status===404){
  messageApi.open({
    type: 'error',
    content: res.response.data.msg,
  });
}
   })
  };






  return (
<>
{contextHolder}
 <Form className='allassignmentDiv' onFinish={onFinish}>
    <h2>All Assignments</h2>
      <Form.Item
      label="Choose Role" 
            name="role"
            // rules={[{ required: true, message: "Please select teacher" }]}
          >
            <Select<string> placeholder="Choose Teacher or Admin or Manager" className="select" suffixIcon={<UserOutlined/>}>

            {
              allteachers.map((e)=>{
                return    <Option value={e.name}>{e.name} <Text type="secondary" style={{ fontSize: '12px',color:"orange" }}> (Teacher) </Text></Option>
              })
            }
           {
             alladmin.map((e)=>{
                return    <Option value={e.name}> {e.name} <Text type="secondary" style={{ fontSize: '12px',color:"orange" }}> (Admin ) </Text>
              
              </Option>
              })
            }
            </Select>
          </Form.Item>


      <Form.Item name="class" 
          label="Choose Class" 
    //   rules={[{ required: true, message: 'Please select the class number' }]}
      >
        <Select  placeholder="Select class">
          {classNames.map((name, index) => (
            <Option key={index + 1} value={index + 1}>
              {name}
            </Option>
          ))}
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Search
        </Button>
     
      </Form.Item>
    </Form>

    {
      loading?<LoadingModal/>: <div>
      {
        allassignment&&allassignment.length>0&&allassignment.map((e:any,i)=>{
          return <SingleAssignmentDiv data={e}/>
        })
      }
    </div>
    }
   
</>
   
  );
};

export default AllAssignments ;

