import axios from "axios"
import { AppDispatch } from "../Store"
import { loading,error, SIGNUP } from "./auth.type"
import { signupformdataType } from "../../utils/data.types"
import Cookies from "js-cookie"
export interface loadinginter{
   type:typeof loading
}
export interface errorinter{
   type:typeof error
}
export interface signupinter{
   type:typeof SIGNUP
}
export type authaction =loadinginter|errorinter|signupinter
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

 
//  export const signup=(data:signupformdataType):any=>async(dispatch:AppDispatch)=>{
//    dispatch(loadingType())
// return await axios({
//       method:"post",
//       url:"http://localhost:8080/user/signup",
//       data:{
//         ...data
//       }
//    }).then((res)=>{
    
//       //   return res
//       // console.log(res)
//    }).catch((err)=>{
//       // dispatch(errorType())
//       // return err
//       // console.log(err)
//    })
//  }

export const signup = (data: signupformdataType): any => async (dispatch: AppDispatch) => {
   dispatch(loadingType());
 
   try {
     const response = await axios.post("http://localhost:8080/user/signup", data);
 
     return response; 
   } catch (error) {
  
     dispatch(errorType());
 
     return error; 
   }
 };
 

 export const UserLogin = (data:{email:String,password:String}): any => async (dispatch: AppDispatch) => {
   dispatch(loadingType());
 
   try {
     const response = await axios.post("http://localhost:8080/user/login", data);
   if(response.request.status===200){
   Cookies.set('SchooleManagementUserData',JSON.stringify(response.data.data) ,{expires:7});
   Cookies.set('SchooleManagementUserToken',response.data.token ,{expires:7});
 
   }
     return response; 
   } catch (error) {
  
     dispatch(errorType());
 
     return error; 
   }
 };