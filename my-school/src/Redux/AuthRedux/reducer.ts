


import { inidataType } from "../../utils/data.types"
import { authaction } from "./action"
import { loading,error, SIGNUP } from "./auth.type"

let inidata={
    loading:false,
    error:false,
  
}

export function reducer(state:inidataType=inidata,action:authaction){
      switch(action.type){
        case(loading):{
            return {...state,loading:true}
        }
        case(error):{
            return {...state,error:true}
        }
        case(SIGNUP):{
            return {...state}
        }
        default:{
            return state
        }
      }

}