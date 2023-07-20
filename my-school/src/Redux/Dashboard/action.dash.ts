import axios from "axios"
import { studentData } from "../../utils/data.types"
import { AppDispatch } from "../Store"
import { ERROR, GETSUDENTS, LOADING } from "./types.dash"
import Cookies from "js-cookie"


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
export type userAction =loadinginter |errorinter|getstudentdatainter



export let getAllStudentsOfusers=():any=>async(dispatch:AppDispatch)=>{
      dispatch(loadingtype())
      let token=(Cookies.get("SchooleManagementUserToken"))
     return await  axios.get(`http://localhost:8080/student/allStudents`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res)=>{
        dispatch(getallstudentstype(res.data.data))
      console.log(res)
      }).catch((err)=>{
        dispatch(errortype())
        console.log(err)
      })
}