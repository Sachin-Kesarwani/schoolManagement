import { studentData } from "../../utils/data.types";
import { userAction } from "./action.dash";
import { ERROR, GETSUDENTS, LOADING } from "./types.dash";

type data ={
    name:string

}

export interface inidatainter {
    loading:boolean;
    error:boolean;
    allStudentsdata:studentData[]

}

const initialstate = {
    loading:false,
    error:false,
    allStudentsdata:[]
}




export const Dashreducer=(state:inidatainter=initialstate,action:userAction)=>{
    switch (action.type) {
        case LOADING:{
            return {
                ...state,loading:true
            }
        }
        case ERROR:{
            return {
                ...state,error:true,loading:false
            }
        }
        case GETSUDENTS:{
            return {
                ...state,loading:false,allStudentsdata:action.payload
            }
        }
             
           
    
        default:
            break;
    }



}