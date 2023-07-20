import React, { useEffect, useState } from 'react'
import { SingleAssignment } from '../utils/data.types'
import { Badge, Button, message } from 'antd'
import {  Typography } from 'antd';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useAppDispatch } from '../Redux/Store';
import {deleteassignment} from "../Redux/AdminRedux/admin.type"
const { Text } = Typography;

const SingleAssignmentDisplay = ({data}:{data:SingleAssignment}) => {
  const [messageApi, contextHolder] = message.useMessage();
    let [see,setSee]=useState(false)
    let [assignmentdetail,setAssignmentDetail]=useState(data.assignment )
    let [end,setEnd]=useState(false)
    let datas=Cookies.get("SchooleManagementUserData")||"{position:User}"
    let  admindata=JSON.parse(datas)
    const givenDate = new Date(data.timeLine);
    const currentDate = new Date();
    let dispatch=useAppDispatch()


    function isDateInPast(dateString:string) {
        const today = new Date();
        const [day, month, year] = dateString.split('-').map((part) => parseInt(part, 10));
      
        // Assuming 2000 is the base year for 2-digit years like '23'
        const fullYear = year >= 50 ? 1900 + year : 2000 + year;
      
        const inputDate = new Date(fullYear, month - 1, day); // Month is zero-based in JavaScript Date
      
        return inputDate <= today;
      }
      useEffect(()=>{
       
        if( isDateInPast(data.timeLine)){
            setEnd(true)
        }else{
            setEnd(false)
        }
      },[])
console.log(data.timeLine)
  return (
    <div style={{borderRadius:"8px",boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",width:"90%",margin:"auto",height:see?"270px":"120px",marginBottom:"10px"}}>
      {contextHolder}
        <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
        <Badge style={{background:"orange",margin:"5px 5px",float:"right"}} count={`Class ${data.class}`}/>
        <Badge style={{background:end?"red":"green",margin:"5px 5px",float:"right"}} count={`Time Line : ${data.timeLine}`}/>
       
   
        </div>
          <h2  style={{textAlign:"left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" ,marginLeft:"20px",marginTop:"20px"}}>{data.assignmet_topic}</h2>
        <div style={{display:"flex",justifyContent:"space-between"}}>
      
        <Text style={{float:"left",margin:"0px 0px 5px 20px"}} type="secondary">Created by {data.teacher}</Text>
        <div>
        <Button disabled={end} style={{marginRight:"20px"}} onClick={()=>setSee(!see)}>{see?"Close":"See"}</Button>
        
        </div>
        </div>
        <div style={{overflow:"scroll",height:"150px",display:see?"block":"none"}}>
            <div style={{maxWidth:"750px",margin:"auto"}}>
            {assignmentdetail.map((e, index) => {
        let element: JSX.Element;
        switch (e.tag) {
          case 'p':
            element = <p style={{textAlign:"left",color:"black",marginTop:"20px",borderLeft:"3px solid green",paddingLeft:"8px"}} key={index}>{e.message}</p>;
            break;
          case 'h1':
            element = <h1 style={{textAlign:"left",color:"black",borderLeft:"3px solid red",marginTop:"20px",paddingLeft:"8px"}}  key={index}>{e.message}</h1>;
            break;
          case 'h2':
            element = <h2 style={{textAlign:"left",color:"black",marginTop:"20px"}}  key={index}>{e.message}</h2>;
            break;
          case 'h4':
            element = <h4 style={{textAlign:"left",color:"black",marginTop:"20px"}}  key={index}>{e.message}</h4>;
            break;
            case 'li':
              element = <li style={{textAlign:"left",color:"black",marginTop:"20px"}}  key={index}>{e.message}</li>;
              break;
          default:
            element = <p style={{textAlign:"left",color:"black",marginTop:"20px",borderLeft:"3px solid green",paddingLeft:"8px"}}  key={index}>{e.message}</p>;
        }
        return element;
      })}

            </div>


        </div>
    </div>
  )
}

export default SingleAssignmentDisplay 
