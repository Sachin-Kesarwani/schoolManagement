import axios from "axios"
import { AppDispatch } from "../Store"
import { loading,error, SIGNUP } from "./auth.type"
import { signupformdataType } from "../../utils/data.types"
import { Cookies, useCookies } from 'react-cookie';
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

   //   dispatch(successType(response.data));
 
     return response; 
   } catch (error) {
  
     dispatch(errorType());
 
     return error; 
   }
 };
 