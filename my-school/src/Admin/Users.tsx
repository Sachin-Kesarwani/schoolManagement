import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../Redux/Store'
import { getallusers } from '../Redux/AdminRedux/action'
import { Avatar, Badge, Button, Card, message, Space } from 'antd';
import "../admincss/user.css"
import { UserOutlined } from '@ant-design/icons';
import { eachuserInter, inidataType } from '../utils/data.types';
import Cookies from 'js-cookie';
import Unauthorised from './Unauthorised';
import LoadingModal from './Loading';

// interface eachuserInter{
//   email:String,
//   name:String,
//   Position:String,
//   Password:String
// }

const Users = () => {

const [messageApi, contextHolder] = message.useMessage();
let dispatch=useAppDispatch()
let [loading,setLoading]=useState<Boolean>(false)
let data=Cookies.get("SchooleManagementAdminData")||"{position:User}"
let  admindata=JSON.parse(data)
let alldata = useAppSelector((state) => (state.AdminReducer as inidataType).alluserdatas);

function getdata(){
  setLoading(true)
  dispatch(getallusers()).then((res:any)=>{
  setLoading(false)
    if(res.request.status===200){
   
      messageApi.open({
        type: 'success',
        content: res.data.msg,
      });
    }else if(res.request.status===400){
      
      messageApi.open({
        type: 'error',
        content: res.response.data.msg,
      });
    }else if(res.request.status===401){
      messageApi.open({
        type: 'error',
        content: res.response.data.msg,
      });
    }
    // else {
    //   messageApi.open({
    //     type: 'success',
    //     content: res.response.data.msg,
    //   });
    // }

  })
}
  useEffect(()=>{
    getdata()
  },[])

  return (
    <>
     {contextHolder}
     {
      admindata.position==="Teacher"||admindata.position==="Admin"?<Unauthorised/>: loading?<LoadingModal />: <div>
      <h1 style={{color:"black"}}>Users</h1>
      <div className='ParentdivOfSingleuser'>
        {
         alldata?.map((e:eachuserInter,i)=>{
            return<div key={i }>
       <Badge.Ribbon text={e.name}/>
       <Avatar style={{ backgroundColor: 'blue',color:"white",marginTop:"30px" }} icon={<UserOutlined />} />
       <p style={{textAlign:"left",marginLeft:"8px"}}><b>Email</b> : {e.email}</p>
       <p style={{textAlign:"left",marginLeft:"8px"}}><b>Position</b> :{e.position}</p>
       <button className='makesuserblockButton'>
    Block
    </button>
            </div>
          })
        }
      </div>
    
    </div>
     }
  
    </>
  )
}

export default Users
