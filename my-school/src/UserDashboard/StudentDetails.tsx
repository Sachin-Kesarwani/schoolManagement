import { Card } from 'antd'
import Cookies from 'js-cookie'
import React from 'react'
import { useAppDispatch } from '../Redux/Store'

const StudentDetails = () => {
  // let studentdata=useAppDispatch((store)=>store.)
  // let allRequests=useAppSelector((state) => (state.AdminReducer as inidataType).allRequest)
  let Cookieuserdata=Cookies.get("SchooleManagementUserData") ||"{name:Sachin}"
let userdata=JSON.parse(Cookieuserdata)
  return (
    <div>
      <h1 style={{color:"black"}}> Hi 👋, {userdata.name.toUpperCase()} <span style={{color:"blue"}}>Welcome To Your Student Dashboard Panel</span></h1>

      {

      }
      <Card title={userdata.name.toUpperCase()} style={{backgroundColor:"#f5f5f0",width:"50%"}} bordered={true}>
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
    </div>
  )
}

export default StudentDetails
