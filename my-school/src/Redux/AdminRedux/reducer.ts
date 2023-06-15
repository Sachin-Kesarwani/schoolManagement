


import { inidataType } from "../../utils/data.types"
import { authaction } from "./action"
import { loading,error,getUserdata } from "./admin.type"

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
       
        default:{
            return state
        }
      }

}