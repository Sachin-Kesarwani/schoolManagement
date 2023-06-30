import React, { useState } from 'react'
import { SingleAssignment } from '../utils/data.types'
import { Badge, Button } from 'antd'
import { Space, Typography } from 'antd';
import Cookies from 'js-cookie';

const { Text, Link } = Typography;
const SingleAssignmentDiv = ({data}:{data:SingleAssignment}) => {
    let [see,setSee]=useState(false)
    let [assignmentdetail,setAssignmentDetail]=useState(data.assignment )
    let datas=Cookies.get("SchooleManagementAdminData")||"{position:User}"
    let  admindata=JSON.parse(datas)
    const givenDate = new Date(data.timeLine);
    const currentDate = new Date();
  
  return (
    <div style={{borderRadius:"8px",boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",width:"100%",height:see?"270px":"120px",marginBottom:"10px"}}>
        <div style={{display:"flex",justifyContent:"space-between",width:"100%"}}>
        <Badge style={{background:"orange",margin:"5px 5px",float:"right"}} count={`Class ${data.class}`}/>
        <Badge style={{background:currentDate>=givenDate?"green":"red",margin:"5px 5px",float:"right"}} count={`${data.timeLine}`}/>
       
   
        </div>
          <h2  style={{textAlign:"left", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" ,marginLeft:"20px",marginTop:"20px"}}>{data.assignmet_topic}</h2>
        <div style={{display:"flex",justifyContent:"space-between"}}>
      
        <Text style={{float:"left",margin:"0px 0px 5px 20px"}} type="secondary">Created by {data.teacher}</Text>
        <div>
        <Button style={{marginRight:"20px"}} onClick={()=>setSee(!see)}>{see?"Close":"See"}</Button>
           <Button >Edit</Button>
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

export default SingleAssignmentDiv
