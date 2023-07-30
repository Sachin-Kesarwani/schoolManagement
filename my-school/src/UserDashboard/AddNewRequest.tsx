import React,{useState} from 'react';
import { Form, Input, Select, Switch, Button, Row, Col } from 'antd';
import { useAppDispatch, useAppSelector } from '../Redux/Store';
import { inidatainter } from '../Redux/Dashboard/reducer.dash';
import { addNewRequest } from '../Redux/Dashboard/action.dash';
import Loader from './Loader/Loader';
//sample={
    // userid:{type:String,require:true},
    // student_id:{type:String,require:true},
    // category:{type:String,require:true},
    // previous_data:String||number,
    // new_data:String||number,
    // reason_message:{type:String,require:true}
    // }
    // name: {type:String,required:true},
    // fatherName: {type:String,required:true},
    // motherName: {type:String,required:true},
    // class: {type:Number,required:true},
    // address: {type:String,required:true},
    // aadhar: {type:Number,required:true},
    // contact:{type:Number,required:true},
    // DOB: {type:String,required:true},
    // transport: {type:Boolean,required:true},
    // test_score: {type:Number,required:false},
    // transport_from: {type:String,required:false},
    // transport_to: {type:String,required:false},
const { Option } = Select;

const AddNewRequest = () => {
    let dispatch=useAppDispatch()
    let [loading,setLoading]=useState(false)
  const onFinish = (values:any) => {
    console.log('Form values:', values);
    setLoading(true)
   dispatch(addNewRequest(values)).then((res:any)=>{
setLoading(false)
   })
    // Perform any further actions with the form values, such as sending the data to the server
  };
  let studentdata = useAppSelector(
    (store) => (store.Dashreducer as inidatainter).allStudentsdata
  );
  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      initialValues={{
        category: 'name',
        cancel_request: true,
        status: false,
      }}
    >
      <Row gutter={[16, 16]}>
      <Col xs={24} sm={12} md={8} lg={6} xl={6}>
          <Form.Item label="Student Name" name="student_id" rules={[{ required: true, message: 'Please select Student name' }]}>
            <Select>
              <Option value=""> Student Name</Option>
           
              {
                studentdata.map((e)=>{
                    return    <Option style={{display:e.status?"block":"none"}} value={e._id}>{e.name} <span style={{color:"orange",fontSize:"12px"}}>Class  {e.class}</span></Option>
                })
              }
            </Select>
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
          <Form.Item label="Category" name="category" rules={[{ required: true, message: 'Please select a Category!' }]}>
            <Select>
            <Option value="">Seletct category</Option>
              <Option value="name">Name</Option>
              <Option value="fatherName">Father Name</Option>
              <Option value="motherName">Mother Name</Option>
              <Option value="class">Change Class</Option>
              <Option value="address">Address</Option>

              <Option value="contact">Change Class</Option>

              <Option value="address">Address</Option>

                <Option value="contact">Change Class</Option>
                <Option value="other">Other</Option>


            </Select>
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
          <Form.Item label="Previous Data" name="previous_data" rules={[{ required: true, message: 'Please input Previous Data!' }]}>
            <Input />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
          <Form.Item label="New Data" name="new_data" rules={[{ required: true, message: 'Please input New Data!' }]}>
            <Input />
          </Form.Item>
        </Col>

        {/* <Col xs={24} sm={12} md={8} lg={6} xl={6}>
          <Form.Item label="Cancel Request" name="cancel_request" valuePropName="checked">
            <Switch />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
          <Form.Item label="Status" name="status" valuePropName="checked">
            <Switch />
          </Form.Item>
        </Col> */}

        <Col xs={24} sm={12} md={8} lg={6} xl={6}>
          <Form.Item label="Reason Message" name="reason_message" rules={[{ required: true, message: 'Please input Reason Message!' }]}>
            <Input />
          </Form.Item>
        </Col>

        <Col span={24}>
          <Form.Item>
            <Button type="primary" htmlType="submit">{loading?<Loader/>:"Submit"}</Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default AddNewRequest;
