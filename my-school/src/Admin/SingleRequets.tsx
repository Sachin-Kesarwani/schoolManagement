import React from 'react';
import { Badge, Avatar, Button } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { RaisesdrequestInter } from '../utils/data.types';
import StudentDetail from './StudentDetailmodal';

// const data = {
//   userId: "647085aaa4e6e1b6d4ed687c",
//   studentId: "tg65348jhy5413456ytrf7789iuk",
//   category: "class",
//   previousData: "7",
//   newData: "15",
//   cancelRequest: false,
//   status: false,
//   reasonMessage: "Very imp"
// };

const SingleRequests = ({data}:{data:RaisesdrequestInter}) => {
    console.log(data)
  return (
    <div key={data.userid}>
      <Badge.Ribbon text={data.category} />
      <Avatar
        style={{ backgroundColor: 'blue', color: 'white', marginTop: '30px' }}
        icon={<UserOutlined />}
      />
      {/* <p style={{ textAlign: 'left', marginLeft: '8px' }}>
        <b>Email</b> : {data.userid}
      </p> */}
      <p style={{ textAlign: 'left', marginLeft: '8px' }}>
        <b>Student</b> : <StudentDetail/>
      </p>
      <p style={{ textAlign: 'left', marginLeft: '8px' }}>
        <b>Previous Data</b> : {data.previous_data}
      </p>
      <p style={{ textAlign: 'left', marginLeft: '8px' }}>
        <b>New Data</b> : {data.new_data}
      </p>
      {/* <p style={{ textAlign: 'left', marginLeft: '8px' }}>
        <b>Cancel Request</b> : {data.cancel_request.toString()}
      </p>
      <p style={{ textAlign: 'left', marginLeft: '8px' }}>
        <b>Status</b> : {data.status.toString()}
      </p> */}
      <p style={{ textAlign: 'left', marginLeft: '8px' }}>
        <b>Reason Message</b> : {data.reason_message}
      </p>
      {/* <button className='makesuserblockButton'>Cancel</button>
      <button className='makesuserblockButton'>Approve Changes</button> */}
       <Button style={{margin:"10px",backgroundColor:"red",color:"white"}}>Cancel</Button>
      <Button style={{margin:"10px",backgroundColor:"orange",color:"white"}}>Approve Changes</Button>

    </div>
  );
};

export default SingleRequests;
