import axios from "axios"
import { LoginDataInter } from "../../Admin/AdminLogin"
import { loading ,error} from "../AdminRedux/admin.type"
import { AppDispatch } from "../Store"
import Cookies from "js-cookie"






export interface loadinginter{
    type:typeof loading
 }
 export interface errorinter{
    type:typeof error
 }

 export type authaction =loadinginter|errorinter

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


  export let LoginAdmin=(data:LoginDataInter):any=>async(dispatch:AppDispatch)=>{
    dispatch(loadingType())
    try {
        const response = await axios.post("http://localhost:8080/admin/loginAdmin", data);
       console.log(response.data.data)
       if(response.request.status===200){
        Cookies.set('SchooleManagementAdminData',JSON.stringify(response.data.data) );
        Cookies.set('SchooleManagementAdminToken',JSON.stringify(response.data.token) );
//localStorage.setItem("schoolManagemnetUserdata",JSON.stringify(response.data.data))
       }
    
      //   dispatch(successType(response.data));
    
        return response; 
      } catch (error) {
     
        dispatch(errorType());
    
        return error; 
      }
  }
 