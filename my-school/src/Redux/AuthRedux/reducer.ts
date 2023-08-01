


import { inidataType } from "../../utils/data.types"
import { authaction } from "./action"
import { loading,error, SIGNUP } from "./auth.type"
interface loginInter{
    loading:Boolean,
    error:Boolean
}
let inidataauth={
    loading:false,
    error:false,
  
}

export function reducer(state:loginInter=inidataauth,action:authaction){
      switch(action.type){
        case(loading):{
            return {...state,loading:true}
        }
        case(error):{
            return {...state,error:true,loading:false}
        }
        case(SIGNUP):{
            return {...state,loading:false}
        }
        default:{
            return state
        }
      }

}