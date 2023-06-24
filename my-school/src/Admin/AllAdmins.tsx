import React, { useEffect } from 'react'
import SingleAdminTeacher from './SingleAdminTeacher'
import {  useAppDispatch, useAppSelector } from '../Redux/Store'
import { GetAllTeacheresFromServer } from '../Redux/AdminRedux/action'
import { inidataType, singleTeacherOrAdmin } from '../utils/data.types'
import { message } from 'antd'
import "../admincss/user.css"
import Cookies from 'js-cookie'
import Unauthorised from './Unauthorised'
const Alladmins = () => {
let dispatch=useAppDispatch()
const [messageApi, contextHolder] = message.useMessage();
let data=Cookies.get("SchooleManagementAdminData")||"{position:User}"
let  admindata=JSON.parse(data)
let allteachers=useAppSelector((state) => (state.AdminReducer as inidataType).allTeacher)
  function getallTeacher(){
dispatch(GetAllTeacheresFromServer("Admin")).then((res:any)=>{
  if(res.request.status===200){
   
    messageApi.open({
      type: 'success',
      content: "These are all Admins",
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
  }else  if(res.request.status===404){
    messageApi.open({
      type: 'success',
      content: res.response.data.msg,
    });
  }
})
  }
  useEffect(()=>{
    getallTeacher()
  },[])
  return (
    <> {contextHolder}
    {
         admindata.position==="Teacher"||admindata.position==="Admin"?<Unauthorised/>:  <div >
         <h1 style={{color:"black"}}>Working Admins</h1>
         <div  className='ParentdivOfSingleuser'>
         {
           allteachers&&allteachers.length>0&&allteachers.map((e:singleTeacherOrAdmin)=>{
   return     <SingleAdminTeacher data={e}/>
           })
         }
       
         </div>
       
       </div>
    }
   </>
  )
}

export default Alladmins