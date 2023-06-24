


import { eachuserInter, inidataType } from "../../utils/data.types"
import { Adminaction } from "./action"
import { loading,error,getUserdata, getteacher } from "./admin.type"

let inidata:inidataType={
    loading:false,
    error:false,
    alluserdatas:[],
    allTeacher:[]
    
 }

export let reducer=(state:inidataType=inidata,action:Adminaction)=>{

      switch(action.type){
        case(loading):{
            return {...state,loading:true}
        }

        case(error):{
            return {...state,error:true}
        }
       
        case(getUserdata):{
        
            return {...state,loading:false,alluserdatas:action.payload}
        }
        case(getteacher):{
        
            return {...state,loading:false,allTeacher:action.payload}
        }
        
        default:{
            return state
        }
      }

}