

import React, { useState ,useContext} from 'react';
import { Form, Input, Select, Button, Row, Col, Switch, Card, Image, Steps, Result } from 'antd';
// import 'animate.css/animate.min.css';
import "./DashBoardCSS/AddnewStudent.css" // Custom CSS file for additional styles
import axios, { AxiosResponse } from 'axios';
import Loader from './Loader/Loader';
import Test from "./TestforAdmission"
import { AddnewStudentInter } from '../utils/data.types';
import Cookies from 'js-cookie';

let inidata=  {DOB: "",
aadhar: 0,
address: "",
class:0,
contact:0,
fatherName: "",
motherName:"",
name:"",
parents_image: "",
student_image:"",
transport:false,
transport_from:"",
transport_to: "",
test_score:0
}
const { Option } = Select;

const AddNewStudent = () => {
  const [showTransportFields, setShowTransportFields] = useState(false);
  const [studentImageURL, setStudentImageURL] = useState('');
  let [parentImageURl,setparentImageURl]=useState("")
  let [imagestudentLoading,setImagestudentLoading]=useState(false)
  let [imageparentLoading,setImageparentLoading]=useState(false)
   let [data,setData]=useState<AddnewStudentInter>(inidata)
let [formSubmitted,setformSubmitted]=useState(false)


  let [test,setTest]=useState(false)
  let [currentStatus,setCurrentStatus]=useState(-1)
  const onFinish = (values:any) => {
    values.parents_image=parentImageURl
    values.student_image=studentImageURL
    if(values.transport===undefined){
      values.transport=false
    }
    setData(values)
  
    setTest(true)
    setCurrentStatus(0)
  };

  const handleTransportSwitchChange = (checked:boolean) => {
    setShowTransportFields(checked);
  };

 async  function getSudentimagURl(event: any){
  event.preventDefault();
  setImagestudentLoading(true)
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
    setImagestudentLoading(false)
    setStudentImageURL(response.data);
  }
   // Update the student image URL after successful upload
  } catch (error) {
    console.error('Error uploading image:', error);
  }
  }
  async  function getParentimagURl(event: any){
    event.preventDefault();
    setImageparentLoading(true)
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
      setImageparentLoading(false)
      setparentImageURl(response.data); 
    }
     // Update the student image URL after successful upload
    } catch (error) {
      console.error('Error uploading image:', error);
    }
    }

  async function addformdata(score:number){
    const obj = {
      ...data,test_score: score,
    };
 console.log(obj)
    try {
      let token=(Cookies.get("SchooleManagementUserToken"))
      const response: AxiosResponse = await axios.post("http://localhost:8080/student/register",obj, { headers: { Authorization: `Bearer ${token}` } });
      // Handle the response here if needed
      console.log(response.data);
      setTest(false)
      setformSubmitted(true)
      setCurrentStatus(2)
    } catch (error) {
      // Handle any errors that occurred during the API call
      console.error(error);
    }
  }


  return (
    <>
      <Steps
      style={{width:"90%",margin:"auto"}}
    current={currentStatus}
    items={[
      {
        title: 'Form Filling',
       
      },
      {
        title: 'Test',
      
      },
      {
        title: 'Waiting',
       
      },
    ]}
  />
     <div className="form-container" style={{display:test?"none":formSubmitted?"none":"block"}}>
      <Card >
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
            {
        imagestudentLoading ?<Col style={{display:"grid",alignItems:"center"}} xs={24} sm={12}><Loader color={"blue"}/></Col>:  studentImageURL.length>0&&<Col   xs={24} sm={12}><Image preview={false} style={{margin:"auto",borderRadius:"10px"}} width={"80px"} height={"80px"} src={studentImageURL}/></Col>
        }
          {/* </Col>
          <Col xs={24} sm={12}>
            <Form.Item label="Parents Image" name="parents_image" rules={[{ required: true, message: 'Please enter the class!' }]}>
            <Input type='file' name="myImage" accept="image/*" onChange={getParentimagURl} />
            
            </Form.Item>
          </Col> */}
        </Row>
        <Row  gutter={16}>
        {/* {
        imagestudentLoading ?<Col xs={24} sm={12}><Loader color={"blue"}/></Col>:  studentImageURL.length>0&&<Col xs={24} sm={12}><Image preview={false} style={{margin:"auto",borderRadius:"10px"}} width={"80px"} height={"80px"} src={studentImageURL}/></Col>
        } */}
      
          <Col xs={24} sm={12}>
            <Form.Item label="Parents Image" name="parents_image" rules={[{ required: true, message: 'Please enter the class!' }]}>
            <Input type='file' name="myImage" accept="image/*" onChange={getParentimagURl} />
            
            </Form.Item>
          </Col>
          {
        imageparentLoading?<Col style={{display:"grid",alignItems:"center"}}  xs={24} sm={12}><Loader color={"blue"}/></Col> : parentImageURl.length>0&&<Col xs={24} sm={12}><Image preview={false} style={{margin:"auto",borderRadius:"10px"}} width={"80px"} height={"80px"} src={parentImageURl}/></Col>
        }
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
    {/* {
      test&& <Test addformdata={addformdata} setCurrentStatus={  setCurrentStatus} currentStatus={currentStatus} />
    } */}
    {
      formSubmitted? <Result
      status="success"
      title="Successfully Form Submitted Wait for the Response"
    
    />: test&& <Test addformdata={addformdata} setCurrentStatus={  setCurrentStatus} currentStatus={currentStatus} />
    }
    </>
   
  );
};

export default AddNewStudent;
