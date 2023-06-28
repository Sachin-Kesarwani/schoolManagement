import React from 'react';
import { Badge, Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { RaisesdrequestInter } from '../utils/data.types';
import StudentDetail from './StudentDetailmodal';
import { useAppDispatch } from '../Redux/Store';
import { UpdatedataForRequests } from '../Redux/AdminRedux/action';
import { request } from 'http';

// const data = {
//   userId: "647085aaa4e6e1b6d4ed687c",
//   studentId: "tg65348jhy5413456ytrf7789iuk",
//   category: "class",
//   previousData: "7",
//   newData: "15",
//   cancelRequest: false,
//   status: false,
//   reasonMessage: "Very imp"
// };
    // data={category:"name",new_data:"Aman",pre_data:"Sachin",aproved_change:true||false}
const SingleRequests = ({data}:{data:RaisesdrequestInter}) => {
  let dispatch=useAppDispatch()
   function handleChanges(category:string,newdata:string,preData:string,reqid:any,student_id:string):void{
      let data={category,new_data:newdata,pre_data:preData,aproved_change:true,reqid,student_id}
     dispatch(UpdatedataForRequests(data)).then((res:any)=>{
      console.log(res)
     })
   }
  return (
    <div key={data.userid}>
      <Badge.Ribbon text={data.category} />
      <Avatar
        style={{ backgroundColor: 'blue', color: 'white', marginTop: '30px' }}
        icon={<UserOutlined />}
      />
    
      <p style={{ textAlign: 'left', marginLeft: '8px' }}>
        <b>Student</b> : <StudentDetail/>
      </p>
      <p style={{ textAlign: 'left', marginLeft: '8px' }}>
        <b>Previous Data</b> : {data.previous_data}
      </p>
      <p style={{ textAlign: 'left', marginLeft: '8px' }}>
        <b>New Data</b> : {data.new_data}
      </p>
      {/* <p style={{ textAlign: 'left', marginLeft: '8px' }}>
        <b>Cancel Request</b> : {data.cancel_request.toString()}
      </p>
      <p style={{ textAlign: 'left', marginLeft: '8px' }}>
        <b>Status</b> : {data.status.toString()}
      </p> */}
      <p style={{ textAlign: 'left', marginLeft: '8px' }}>
        <b>Reason Message</b> : {data.reason_message}
      </p>
    
       <Button style={{margin:"10px",backgroundColor:"red",color:"white"}}>Cancel</Button>
      <Button disabled={data.status} onClick={()=>handleChanges(data.category,data.new_data,data.previous_data,data._id,data.student_id)} style={{margin:"10px",backgroundColor:"orange",color:"white"}}>{data.status?"Approve Changes":"Approved Changes"}</Button>

    </div>
  );
};

export default SingleRequests;
