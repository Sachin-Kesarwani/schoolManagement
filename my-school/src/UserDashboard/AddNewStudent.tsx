

import React, { useState } from 'react';
import { Form, Input, Select, Button, Row, Col, Switch, Card } from 'antd';
// import 'animate.css/animate.min.css';
import "./DashBoardCSS/AddnewStudent.css" // Custom CSS file for additional styles
import axios, { Axios } from 'axios';

const { Option } = Select;

const AddNewStudent = () => {
  const [showTransportFields, setShowTransportFields] = useState(false);
  const [studentImageURL, setStudentImageURL] = useState('');
  let [parentImageURl,setparentImageURl]=useState("")
  const onFinish = (values:any) => {
    values.parents_image=parentImageURl
    values.student_image=studentImageURL
    if(values.transport===undefined){
      values.transport=false
    }
    console.log('Form values:', values);
  };

  const handleTransportSwitchChange = (checked:boolean) => {
    setShowTransportFields(checked);
  };

 async  function getSudentimagURl(event: any){
  event.preventDefault();
  const formData = new FormData();
  const fileInput = event.target.files[0];
  formData.append('myImage', fileInput);

  try {
    const response = await axios.post('http://localhost:8080/uploadphoto', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  if(response.status===201){
    setStudentImageURL(response.data);
  }
   // Update the student image URL after successful upload
  } catch (error) {
    console.error('Error uploading image:', error);
  }
  }
  async  function getParentimagURl(event: any){
    event.preventDefault();
    const formData = new FormData();
    const fileInput = event.target.files[0];
    formData.append('myImage', fileInput);
  
    try {
      const response = await axios.post('http://localhost:8080/uploadphoto', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
    if(response.status===201){
      setparentImageURl(response.data); 
    }
     // Update the student image URL after successful upload
    } catch (error) {
      console.error('Error uploading image:', error);
    }
    }

  return (
    <div className="form-container">
      <Card style={{border:"1px solid red"}}>
      <Form onFinish={onFinish} layout="vertical">
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter the name!' }]}>
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Father's Name"
              name="fatherName"
              rules={[{ required: true, message: "Please enter the father's name!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Mother's Name"
              name="motherName"
              rules={[{ required: true, message: "Please enter the mother's name!" }]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item label="Class" name="class" rules={[{ required: true, message: 'Please enter the class!' }]}>
              <Input type="number" />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item
              label="Student Image"
              name="student_image"
              rules={[{ required: true, message: "Please enter the mother's name!" }]}
             
            >
              <Input type='file' name="myImage" accept="image/*" onChange={getSudentimagURl} />
            </Form.Item>
          </Col>
          <Col xs={24} sm={12}>
            <Form.Item label="Parents Image" name="parents_image" rules={[{ required: true, message: 'Please enter the class!' }]}>
            <Input type='file' name="myImage" accept="image/*" onChange={getParentimagURl} />
            
            </Form.Item>
          </Col>
        </Row>
        <Form.Item label="Address" name="address" rules={[{ required: true, message: 'Please enter the address!' }]}>
          <Input />
        </Form.Item>

        <Form.Item
          label="Aadhar Number"
          name="aadhar"
          rules={[{ required: true, message: 'Please enter the Aadhar number!' }]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          label="Contact Number"
          name="contact"
          rules={[{ required: true, message: 'Please enter the contact number!' }]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item label="Date of Birth" name="DOB"  rules={[{ required: true, message: 'Please enter the Date of Birth!' }]}>
          <Input type='date' />
        </Form.Item>

        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Form.Item  valuePropName="checked" label="Transport"  name="transport" className="transport-switch">
              <Switch onChange={handleTransportSwitchChange}  defaultChecked={false}  />
            </Form.Item>
          </Col>
        </Row>

        {showTransportFields && (
          <div className="animate__animated animate__fadeInUp">
            <Form.Item label="Transport From" name="transport_from">
            <Select>
              
               
                <Option value="schoool">From School</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Transport To"
              name="transport_to"
              rules={[{ required: showTransportFields, message: 'Please select transport to!' }]}
            >
              <Select>
                <Option value="5">Around 5 km</Option>
                <Option value="10"> Around  10 km</Option>
                <Option value="15">Around  15 km</Option>
                <Option value="20"> Around 20 km</Option>
                <Option value="25">Around  25 km</Option>
                <Option value="30">Around 30 km</Option>
                <Option value="40">Around 40 km</Option>
                <Option value="50">Around 50 km</Option>
                <Option value="60">Around 60 km</Option>
              </Select>
            </Form.Item>
          </div>
        )}

        <Form.Item className="submit-button">
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
      </Card>
     
    </div>
  );
};

export default AddNewStudent;
