import React from 'react'
import SingleRequests from './SingleRequets'
import {useEffect,useState} from "react"
import { useDispatch } from 'react-redux'
import { GetAllRaisedRequests } from '../Redux/AdminRedux/action'
import { message } from 'antd'
import { useAppSelector } from '../Redux/Store'
import { RaisesdrequestInter, inidataType } from '../utils/data.types'
import LoadingModal from './Loading'
import Nothing from './Nothing'

const Requests = () => {
  let dispatch=useDispatch()
let allRequests=useAppSelector((state) => (state.AdminReducer as inidataType).allRequest)
let [loading,setLoading]=useState<Boolean>(false)
  const [messageApi, contextHolder] = message.useMessage();
  function getdata(){
    setLoading(true)
dispatch(GetAllRaisedRequests()).then((res:any)=>{
  setLoading(false)
  if(res.request.status===200){
   
    messageApi.open({
      type: 'success',
      content:res.data.msg,
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
  console.log(allRequests)
  return allRequests.length===0?<Nothing/>:(
    <>
    {contextHolder}
    {
      loading?<LoadingModal />: <div className='parendivOfrequestDiv'>
      {
       allRequests&&allRequests.length>0&&allRequests.map((e:RaisesdrequestInter)=>{
    return  <SingleRequests data={e}/>
       }) 
      }
       
      </div>
    }
    </>
   
  )
}

export default Requests
