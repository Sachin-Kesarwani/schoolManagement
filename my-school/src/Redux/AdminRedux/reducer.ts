


import { eachuserInter, inidataType } from "../../utils/data.types"
import { authaction } from "./action"
import { loading,error,getUserdata } from "./admin.type"

let inidata:inidataType={
    loading:false,
    error:false,
    alluserdata:[]
 }

export function reducer(state:inidataType=inidata,action:authaction){
   
      switch(action.type){
        case(loading):{
            return {...state,loading:true}
        }

        case(error):{
            return {...state,error:true}
        }
       
        case(getUserdata):{
            return {...state,alluserdata:action.payload,loading:false}
        }
        default:{
            return state
        }
      }

}