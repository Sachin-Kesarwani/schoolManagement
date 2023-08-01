import { createContext ,useState,useEffect} from "react";
import { AddnewStudentInter } from "../utils/data.types"
import Cookies from "js-cookie";


export let context=createContext()


export let ContextProvider=({children})=>{
let [authorized,setAuthorized]=useState(false)
let [username,setusername]=useState("")
function checkforAuthentication(){
    let Cookieuserdata =
    Cookies.get("SchooleManagementUserData") || "{name:Sachin}";
    console.log(Cookieuserdata)
    if(Cookieuserdata &&Cookieuserdata!=="{name:Sachin}"){
      
        let userdata = JSON.parse(Cookieuserdata);
        let token= Cookies.get("SchooleManagementUserToken") 
        console.log(userdata,token)
        if(userdata&&token){
          setAuthorized(true)
          setusername(userdata.name)
        }else{
            setAuthorized(false)
        }
    }
 
}
useEffect(()=>{
    checkforAuthentication()
},[])
    return(
        <context.Provider value={{authorized,username,checkforAuthentication,setAuthorized}}>
            {
                children
            }
        </context.Provider>
    )
}