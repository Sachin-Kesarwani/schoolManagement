import axios from "axios"
import { LoginDataInter } from "../../Admin/AdminLogin"
import { loading ,error,getUserdata} from "../AdminRedux/admin.type"
import { AppDispatch } from "../Store"
import Cookies from "js-cookie"
import { eachuserInter } from "../../utils/data.types"






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
 export type authaction =getuserdatainter|loadinginter|errorinter ;
   
 function loadingType(){
    return{
     type:loading
    }
 }
 function errorType(){
     return{
      type:error
     }
  }

let  alluserType=(data:any)=>{
   return{
      type:getUserdata,
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
      
    }
}