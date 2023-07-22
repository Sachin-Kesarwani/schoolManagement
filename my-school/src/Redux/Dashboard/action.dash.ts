import axios from "axios"
import { RaisesdrequestInter, studentData } from "../../utils/data.types"
import { AppDispatch } from "../Store"
import { ADDNEWREQUEST, ERROR, GETALLREQUESTS, GETSUDENTS, LOADING, UPDATETHEREOPENREQUEST } from "./types.dash"
import Cookies from "js-cookie"
import { allraisedRequestInter } from "../AdminRedux/action"


function loadingtype(){
  return {
    type:LOADING
  }
}
function errortype(){
  return {
    type:ERROR
  }
}
function getallstudentstype(data:studentData[]){
return{
  type:GETSUDENTS,
  payload:data
}
}

function getallrequestType(data:RaisesdrequestInter[]){
  return {
    type:GETALLREQUESTS,
    payload:data
  }
}
function addnewrequestType(data:RaisesdrequestInter){
  return {
    type:ADDNEWREQUEST,
    payload:data
  }
}
//////////////////////Interface////////////////////////////////
export interface loadinginter{
  type:typeof LOADING
}
export interface errorinter{
  type:typeof ERROR
}
export interface getstudentdatainter{
  type:typeof GETSUDENTS,
  payload:studentData[]
}
export interface getrequestinter{
  type:typeof GETALLREQUESTS,
  payload:RaisesdrequestInter[]
}
export interface addrequestinter{
  type:typeof ADDNEWREQUEST;
  payload:RaisesdrequestInter
}
export interface updatewithReopenRequestInter{
  type:typeof UPDATETHEREOPENREQUEST,
  payload:RaisesdrequestInter
}
export type userAction =loadinginter |errorinter|getstudentdatainter|getrequestinter|addrequestinter|updatewithReopenRequestInter



export let getAllStudentsOfusers=():any=>async(dispatch:AppDispatch)=>{
      dispatch(loadingtype())
      let token=(Cookies.get("SchooleManagementUserToken"))
     return await  axios.get(`http://localhost:8080/student/allStudents`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res)=>{
        dispatch(getallstudentstype(res.data.data))
    
      }).catch((err)=>{
        dispatch(errortype())
    
      })
}


export let addNewRequest=(data:any):any=>async(dispatch:AppDispatch)=>{
  dispatch(loadingtype())
  let token=(Cookies.get("SchooleManagementUserToken"))
 return await  axios.post(`http://localhost:8080/request/add`, data,{ headers: { Authorization: `Bearer ${token}` } })
//   .then((res)=>{
 
// \
//   }).catch((err)=>{
//     // dispatch(errortype())
//     console.log(err)
//   })
}

export let getAllStudentsRequests=(studentID:string):any=>async(dispatch:AppDispatch)=>{
  dispatch(loadingtype())
  let token=(Cookies.get("SchooleManagementUserToken"));
 let res=await axios.get(`http://localhost:8080/request/all/${studentID}`, { headers: { Authorization: `Bearer ${token}` } });

if(res.request.status===200){
  console.log(res)
  dispatch(getallrequestType(res.data.requests))
}
 return res
}
