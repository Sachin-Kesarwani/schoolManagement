import React, { useEffect ,useState} from 'react'
import SingleAdminTeacher from './SingleAdminTeacher'
import {  useAppDispatch, useAppSelector } from '../Redux/Store'
import { GetAllTeacheresFromServer } from '../Redux/AdminRedux/action'
import { inidataType, singleTeacherOrAdmin } from '../utils/data.types'
import { message } from 'antd'
import "../admincss/user.css"
import Cookies from 'js-cookie'
import Unauthorised from './Unauthorised'
import LoadingModal from './Loading'
const Teachers = () => {
let dispatch=useAppDispatch()
const [messageApi, contextHolder] = message.useMessage();
let [loading,setLoading]=useState<Boolean>(false)
let data=Cookies.get("SchooleManagementAdminData")||"{position:User}"
let  admindata=JSON.parse(data)
let allteachers=useAppSelector((state) => (state.AdminReducer as inidataType).allTeacher)
  function getallTeacher(){
    setLoading(true)
dispatch(GetAllTeacheresFromServer("Teacher")).then((res:any)=>{
  setLoading(false)
  if(res.request.status===200){
   
    messageApi.open({
      type: 'success',
      content: "All Teachers ",
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
admindata.position==="Teacher"||admindata.position==="Admin"?<Unauthorised/>: loading?<LoadingModal/>: <div >
<h1 style={{color:"black"}}>Teachers</h1>
<div  className='ParentdivOfSingleteacher'>
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

export default Teachers
