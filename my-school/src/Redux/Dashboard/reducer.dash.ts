import { RaisesdrequestInter, studentData } from "../../utils/data.types";
import { allraisedRequestInter } from "../AdminRedux/action";
import { userAction } from "./action.dash";
import { ERROR, GETALLREQUESTS, GETSUDENTS, LOADING, UPDATETHEREOPENREQUEST } from "./types.dash";

type data ={
    name:string

}

export interface inidatainter {
    loading:boolean;
    error:boolean;
    allStudentsdata:studentData[]
    allRequestofEachStudents:RaisesdrequestInter[]

}

const initialstate = {
    loading:false,
    error:false,
    allStudentsdata:[],
    allRequestofEachStudents:[]
}




export const reducer=(state:inidatainter=initialstate,action:userAction)=>{
   
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
                ...state,loading:false,allStudentsdata:[...state.allStudentsdata,...action.payload]
            }
        }
        case GETALLREQUESTS:{
            return {
                ...state,loading:false, allRequestofEachStudents:[...action.payload]
            }
        }
               
         case UPDATETHEREOPENREQUEST:{
            return {
                ...state,allRequestofEachStudents:state.allRequestofEachStudents.map((e)=>e._id===action.payload._id?action.payload:e)
            }
         }
           
    
        default:{
            return {
                ...state
            }
        }
           
    }



}