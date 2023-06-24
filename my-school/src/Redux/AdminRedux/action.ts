import axios from "axios"
import { LoginDataInter } from "../../Admin/AdminLogin"
import { loading ,error,getUserdata, getadmin, getteacher} from "../AdminRedux/admin.type"
import { AppDispatch } from "../Store"
import Cookies from "js-cookie"
import { eachuserInter, singleTeacherOrAdmin } from "../../utils/data.types"






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
 export type Adminaction =getuserdatainter|loadinginter|errorinter|getteacherinter ;
   
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

  let allTeaherType=(data:singleTeacherOrAdmin[]):getteacherinter=>{
    return{
      type:getteacher,
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
      dispatch(allTeaherType(response.data.data))
     return response
    } catch (error) {
      return error
    }
}