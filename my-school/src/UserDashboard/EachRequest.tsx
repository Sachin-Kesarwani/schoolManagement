import { Button, Card, Tag } from 'antd'
import React from 'react'
import { RaisesdrequestInter } from '../utils/data.types'
import "./style.css"
import axios from 'axios'
import Cookies from 'js-cookie'
import ReopenRequest from './ReopenRequest'

const EachRequest = ({data}:{data:RaisesdrequestInter}) => {
    let { cancel_request, category, new_data, previous_data, reason_message, status } = data;
  
  return (
    <Card className='eachrequestcard'  style={{backgroundColor:"#f5f5f0",margin:"auto"}}>
    <h2>Request Details</h2>
    <p style={{textAlign:"left"}}><strong>Canceled Request : </strong> {cancel_request ? <Tag color="red">Canceled</Tag> : <Tag color="green">Not Canceled</Tag>}</p>
    <p style={{textAlign:"left"}}><strong>Category : </strong> {category}</p>
    <p style={{textAlign:"left"}}><strong>New Data : </strong> {new_data}</p>
    <p style={{textAlign:"left"}}><strong>Previous Data : </strong> {previous_data}</p>
    <p style={{textAlign:"left"}}><strong>Reason Message : </strong> {reason_message}</p>
    {
      cancel_request===false &&  <p style={{textAlign:"left"}}><strong>Status:</strong> {status ? <Tag color="green">Resolved</Tag> : <Tag color="orange">In Process</Tag>}</p>
    }
   
    {
        cancel_request&&<ReopenRequest id={data._id}/>
    }
  </Card>
  )
}

export default EachRequest
