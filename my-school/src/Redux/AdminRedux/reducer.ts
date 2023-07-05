


import { eachuserInter, inidataType } from "../../utils/data.types"
import { Adminaction, deleteassignmentInter } from "./action"
import { loading,error,getUserdata, getteacher, enrolledStu, getadmin, raisedReq, allassignment, addAssignment, deleteassignment, editAfterAdminPayment } from "./admin.type"

let inidata:inidataType={
    loading:false,
    error:false,
    alluserdatas:[],
    allTeacher:[],
    alladmin:[],
    enrolledStudents:[],
    allRequest:[],
    assignment:[]
 }

export let reducer=(state:inidataType=inidata,action:Adminaction|deleteassignmentInter)=>{

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
        case(getadmin):{
        
            return {...state,loading:false,alladmin:action.payload}
        }
        case(enrolledStu):{
        
            return {...state,loading:false,enrolledStudents:action.payload}
        }
        case(raisedReq):{
        
            return {...state,loading:false, allRequest:action.payload}
        }
        case(allassignment):{
        
            return {...state,loading:false,assignment:action.payload}
        }
        case(addAssignment):{
        
            return {...state,loading:false,assignment:[...state.assignment,action.payload]}
        }
        case("deleteassignmentInter"):{
        
            return {...state,loading:false,assignment:state.assignment.filter((e)=>e._id!==action.payload)}
        }
        // case(editAfterAdminPayment):{
           
        //     return {
        //         ...state,
        //         loading: false,
        //         alladmin: state.allTeacher.map((e) => {
        //           if (action.payload&&action&&action.payload && typeof action?.payload._id !== 'undefined') {
        //             return e._id !== action.payload._id ? e : action.payload;
        //           }
        //           return e;
        //         }),
        //       };
        // }
        default:{
            return state
        }
      }

}