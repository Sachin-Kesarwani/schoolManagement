import { Button, Card, Tag } from 'antd'
import React from 'react'
import { RaisesdrequestInter } from '../utils/data.types'
import "./style.css"

const EachRequest = ({data}:{data:RaisesdrequestInter}) => {
    let { cancel_request, category, new_data, previous_data, reason_message, status } = data;
   
  return (
    <Card className='eachrequestcard'  style={{backgroundColor:"#f5f5f0",margin:"auto"}}>
    <h2>Request Details</h2>
    <p style={{textAlign:"left"}}><strong>Cancel Request : </strong> {cancel_request ? <Tag color="red">Canceled</Tag> : <Tag color="green">Not Canceled</Tag>}</p>
    <p style={{textAlign:"left"}}><strong>Category : </strong> {category}</p>
    <p style={{textAlign:"left"}}><strong>New Data : </strong> {new_data}</p>
    <p style={{textAlign:"left"}}><strong>Previous Data : </strong> {previous_data}</p>
    <p style={{textAlign:"left"}}><strong>Reason Message : </strong> {reason_message}</p>
    <p style={{textAlign:"left"}}><strong>Status:</strong> {status ? <Tag color="red">Resolved</Tag> : <Tag color="green">Not Resolved</Tag>}</p>
    {
        cancel_request&&<Button>Reopen</Button>
    }
  </Card>
  )
}

export default EachRequest
