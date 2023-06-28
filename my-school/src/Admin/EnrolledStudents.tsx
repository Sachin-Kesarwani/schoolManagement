import React from 'react'
import { studentData } from '../utils/data.types'
import { Avatar, Badge } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import "../admincss/student.css"
const EnrolledStudents = ({data}:{data:studentData}) => {
  return (

      <div className='singleEnrolledStudent'>
  <Badge.Ribbon text={data.name} />
  <Avatar style={{ backgroundColor: 'blue', color: 'white', marginTop: '30px' }} icon={<UserOutlined />} />
  <p style={{ textAlign: 'left', marginLeft: '8px' }}>
    <b>Name:</b> {data.name}
  </p>
  <p style={{ textAlign: 'left', marginLeft: '8px' }}>
    <b>Father's Name:</b> {data.fatherName}
  </p>
  <p style={{ textAlign: 'left', marginLeft: '8px' }}>
    <b>Mother's Name:</b> {data.motherName}
  </p>
  <p style={{ textAlign: 'left', marginLeft: '8px' }}>
    <b>Class:</b> {data.class}
  </p>
  <p style={{ textAlign: 'left', marginLeft: '8px' }}>
    <b>Address:</b> {data.address}
  </p>
  <p style={{ textAlign: 'left', marginLeft: '8px' }}>
    <b>Aadhar:</b> {data.aadhar}
  </p>
  <p style={{ textAlign: 'left', marginLeft: '8px' }}>
    <b>Contact:</b> {data.contact}
  </p>
  <p style={{ textAlign: 'left', marginLeft: '8px' }}>
    <b>Date of Birth:</b> {data.DOB}
  </p>
  {
    
  }
  <p style={{ textAlign: 'left', marginLeft: '8px' }}>
    <b>Transport:</b> {data.transport ? 'Yes' : 'No'}
  </p>
  <p style={{ textAlign: 'left', marginLeft: '8px' }}>
    <b>Test Score:</b> {data.test_score}
  </p>
  <p style={{ textAlign: 'left', marginLeft: '8px' }}>
    <b>Transport From:</b> {data.transport_from}
  </p>
  <p style={{ textAlign: 'left', marginLeft: '8px' }}>
    <b>Transport To:</b> {data.transport_to}
  </p>
  <p style={{ textAlign: 'left', marginLeft: '8px' }}>
    <b>User ID:</b> {data.userid}
  </p>
  <p style={{ textAlign: 'left', marginLeft: '8px' }}>
    <b>Status:</b> {data.status ? 'Active' : 'Inactive'}
  </p>
  <p style={{ textAlign: 'left', marginLeft: '8px' }}>
    <b>Transport Driver:</b> {data.transport_driver}
  </p>
  <p style={{ textAlign: 'left', marginLeft: '8px' }}>
    <b>Transport Conductor:</b> {data.transport_conductor}
  </p>
  <p style={{ textAlign: 'left', marginLeft: '8px' }}>
    <b>Class Teacher:</b> {data.class_teacher}
  </p>
  <p style={{ textAlign: 'left', marginLeft: '8px' }}>
    <b>Class Teacher ID:</b> {data.class_teacher_id}
  </p>
  <p style={{ textAlign: 'left', marginLeft: '8px' }}>
    <b>Transport per Month Fees:</b> {data.transport_per_month_fees}
  </p>

</div>

 
  )
}

export default EnrolledStudents
