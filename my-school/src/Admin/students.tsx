import { Tabs, message } from 'antd';
import {useEffect,useState} from "react"
import "../admincss/student.css"
import { useAppDispatch, useAppSelector } from '../Redux/Store';
import { GetAllEnrolledStudents } from '../Redux/AdminRedux/action';
import { inidataType, studentData } from '../utils/data.types';
import EnrolledStudents from './EnrolledStudents';
import LoadingModal from './Loading';
const { TabPane } = Tabs;

const Students = () => {
let dispatch=useAppDispatch()
let [loading,setLoading]=useState<Boolean>(false)
const [messageApi, contextHolder] = message.useMessage();
let allEnrolledStudents=useAppSelector((state) => (state.AdminReducer as inidataType).enrolledStudents)
  function getdata(){
setLoading(true)
  dispatch(GetAllEnrolledStudents()).then((res:any)=>{
   setLoading(false)
    if(res.request.status===200){
     
      messageApi.open({
        type: 'success',
        content: "All Enrolled Students",
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
  getdata()
},[])
  return (
    <>
    {contextHolder}
    {
      loading?<LoadingModal/>:  <div>
      <Tabs type="card">
        <TabPane  tab="Enrolled Students " key="1" >
          <div className='parentdivOfenrolledStudents'>
          {
  allEnrolledStudents&&allEnrolledStudents.length>0&&allEnrolledStudents.map((e:studentData)=>{
  return <EnrolledStudents data={e}/>
  })
       }
          </div>
     
        </TabPane>
        <TabPane tab="In Process for Admission" key="2">
          <p>two!</p>
        </TabPane>
      </Tabs>
      </div>
     
    }
  
    </>
  );
}

export default  Students;
