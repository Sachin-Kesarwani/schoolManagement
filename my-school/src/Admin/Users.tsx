import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../Redux/Store'
import { getallusers } from '../Redux/AdminRedux/action'
import { Avatar, Badge, Button, Card, message, Space } from 'antd';
import "../admincss/user.css"
import { UserOutlined } from '@ant-design/icons';
import { eachuserInter } from '../utils/data.types';
// interface eachuserInter{
//   email:String,
//   name:String,
//   Position:String,
//   Password:String
// }

const Users = () => {
let dispatch=useAppDispatch()
const [messageApi, contextHolder] = message.useMessage();
let [alldata,setalldata]=useState<eachuserInter[]>([])
//let  alldata=useAppSelector((store)=>store?.AdminReducer?.alluserdata)
function getdata(){
  dispatch(getallusers()).then((res:any)=>{
    if(res.request.status===200){
     setalldata(res.data.data)
      messageApi.open({
        type: 'success',
        content: res.data.msg,
      });
    }

  })
}
  useEffect(()=>{
    getdata()
  },[])
  console.log(alldata)
  return (
    <>
     {contextHolder}
    <div>
      <h1 style={{color:"black"}}>Users</h1>
      <div className='ParentdivOfSingleuser'>
        {
         alldata?.map((e:eachuserInter)=>{
            return<div>
       <Badge.Ribbon text={e.name}/>
       <Avatar style={{ backgroundColor: 'blue',color:"white",marginTop:"30px" }} icon={<UserOutlined />} />
       <p>Email : {e.email}</p>
       <p>Position :{e.position}</p>
       <button className='makesuserblockButton'>
    Block
    </button>
            </div>
          })
        }
      </div>
    
    </div>
    </>
  )
}

export default Users
