import axios from "axios"
import { LoginDataInter } from "../../Admin/AdminLogin"
import { loading ,error,getUserdata, getadmin, getteacher, enrolledStu, raisedReq} from "../AdminRedux/admin.type"
import { AppDispatch } from "../Store"
import Cookies from "js-cookie"
import { RaisesdrequestInter, eachuserInter, singleTeacherOrAdmin, studentData } from "../../utils/data.types"






export interface loadinginter{
    type:typeof loading;
  payload?:eachuserInter[]
 }
 export interface errorinter{
    type:typeof error;
   payload?:eachuserInter[]
 }
export  interface getuserdatainter{
   type:typeof getUserdata,
   payload?:eachuserInter[]
}
export  interface getteacherinter{
  type:typeof getteacher,
  payload?:singleTeacherOrAdmin[]
}

export  interface getenrolledStudenstinter{
  type:typeof getteacher,
  payload?:studentData[]
} 
export interface allraisedRequestInter{
  type:typeof raisedReq,
  payload:RaisesdrequestInter[]
}


 export type Adminaction =getuserdatainter|loadinginter|errorinter|getteacherinter |getenrolledStudenstinter| allraisedRequestInter;
   
 function loadingType():loadinginter{
    return{
     type:loading
    }
 }
 function errorType():errorinter{
     return{
      type:error
     }
  }

let  alluserType=(data:eachuserInter[]):getuserdatainter=>{
   return{
      type:getUserdata,
      payload:data
   }
  }

  let allTeaherType=(data:singleTeacherOrAdmin[],dataTypeAdminOrTeacher:string):getteacherinter=>{
    return{
      type:dataTypeAdminOrTeacher,
      payload:data
   }
  }

  let enrolledStudentsType=(data:studentData[]):getenrolledStudenstinter=>{
    return{
      type:enrolledStu,
      payload:data
   }
  }
let allRaisedRequest=(data: RaisesdrequestInter[]): allraisedRequestInter=>{
  return {
    type:raisedReq,
    payload:data
  }
}
  export let LoginAdmin=(data:LoginDataInter):any=>async(dispatch:AppDispatch)=>{
    dispatch(loadingType())
    try {
        const response = await axios.post("http://localhost:8080/admin/loginAdmin", data);
       console.log(response.data.data)
       if(response.request.status===200){
        Cookies.set('SchooleManagementAdminData',JSON.stringify(response.data.data) );
        Cookies.set('SchooleManagementAdminToken',response.data.token);
//localStorage.setItem("schoolManagemnetUserdata",JSON.stringify(response.data.data))
       }
    
      //   dispatch(successType(response.data));
    
        return response; 
      } catch (error) {
     
        dispatch(errorType());
    
        return error; 
      }
  }
 



export let  getallusers=():any=>async(dispatch:AppDispatch)=>{
      dispatch(loadingType())
    try {
      let token=Cookies.get("SchooleManagementAdminToken")
      let response=await axios.get(`http://localhost:8080/user/allusers`,{headers:{
        Authorization:`Bearer ${token}`
      }})
      console.log(response.data.data)
     dispatch(alluserType(response.data.data))
    
      return response
    } catch (error) {
      return error
    }
}

export let addnewoneToorganisation = (data: any): any => async (dispatch: AppDispatch) => {
  dispatch(loadingType());
  try {
    let token = Cookies.get("SchooleManagementAdminToken");
    let response = await axios({
      method: "post",
      url: "http://localhost:8080/admin/addAdmin",
      headers: {
        Authorization: `Bearer ${token}`
      },
      data: data
    });
    console.log(response.data.data);
    return response;
  } catch (error) {
    return error;
  }
};


export let GetAllTeacheresFromServer=(role:String):any=>async(dispatch:AppDispatch)=>{
  dispatch(loadingType())
    try {
      let token = Cookies.get("SchooleManagementAdminToken");
      let response=await axios.get(`http://localhost:8080/admin/all?role=${role}`,{headers:{Authorization:`Bearer ${token}`}})
      if(role==="Admin"){
        dispatch(allTeaherType(response.data.data,getadmin))
      }else{
        dispatch(allTeaherType(response.data.data,getteacher))
      }
   
     return response
    } catch (error) {
      return error
    }
}



export let GetAllEnrolledStudents=():any=>async(dispatch:AppDispatch)=>{
  dispatch(loadingType())
    try {
      let token = Cookies.get("SchooleManagementAdminToken");
      let response=await axios.get(`http://localhost:8080/student/EnrolledAllStudents`,{headers:{Authorization:`Bearer ${token}`}})
      dispatch(enrolledStudentsType(response.data.data))
     return response
    } catch (error) {
      return error
    }
}


export let GetAllRaisedRequests=():any=>async(dispatch:AppDispatch)=>{
  dispatch(loadingType())
    try {
      let token = Cookies.get("SchooleManagementAdminToken");
      let response=await axios.get(`http://localhost:8080/request/all`,{headers:{Authorization:`Bearer ${token}`}})
      dispatch(allRaisedRequest(response.data.requests))
     return response
    } catch (error) {
      return error
    }
}