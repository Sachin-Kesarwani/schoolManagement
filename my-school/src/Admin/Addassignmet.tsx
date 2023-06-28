
import React, { useState } from "react";
import { Form, Input, Select, Button, DatePicker } from "antd";
import moment, { Moment } from "moment";
import {
  UserOutlined,
  TeamOutlined,
  ReloadOutlined,
  BookOutlined,
} from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { AddAssignmenttoStudents } from "../Redux/AdminRedux/action";
import { useAppSelector } from "../Redux/Store";
import { inidataType } from "../utils/data.types";
import { Typography } from 'antd';

const { Text } = Typography;
const { Option } = Select;

interface Assignment {
  tag: string;
  message: string;
}

export interface AssignmentFormValues {
  class: number;
  teacher: string;
  assignmet_topic: string;
  assignment: Assignment[];
  timeLine: {
  
    $D: number;
    $H: number;
    $L: string;
    $M: number;
    $W: number;
    $d: Date;
    $m: number;
    $ms: number;
    $s: number;
    $u: undefined;
    $x: {};
    $y: number;

  }|undefined|string;

}

const Addassignment = () => {
  const [form] = Form.useForm();
  const [assignments, setAssignments] = useState<Assignment[]>([]);
let [loading,setLoading]=useState(false)
let allteachers=useAppSelector((state) => (state.AdminReducer as inidataType).allTeacher)
let alladmin=useAppSelector((state) => (state.AdminReducer as inidataType).alladmin)


  let dispatch=useDispatch()
  const onFinish = (values: AssignmentFormValues) => {
   // console.log(values);

    const assignmentValues = Object.values(values).filter(
      (value) => typeof value === "object" &&value.tag&&value.message
    );
  
    let timeLineDate = '';
  if (values.timeLine && typeof values.timeLine !== 'string' && values.timeLine.$d) {
    timeLineDate = moment(values.timeLine.$d).format("DD-MM-YY");
  }
    let data={
      class:values.class,
      teacher:values.teacher,
      assignmet_topic:values.assignmet_topic,
      assignment:assignmentValues,
      timeLine:timeLineDate,
      
    }
    setLoading(true)
dispatch(AddAssignmenttoStudents(data)).then((res:any)=>{
setLoading(false)
})
    // const newAssignments: Assignment[] = assignmentValues.map(
    //   (assignmentValue) => {
    //     return {
    //       tag: assignmentValue.tag,
    //       message: assignmentValue.message,
    //     };
    //   }
    // );

    // setAssignmentss(newAssignments);
  };

  const handleAddAssignment = () => {
    const newAssignment: Assignment = {
      tag: "",
      message: "",
    };
    setAssignments([...assignments, newAssignment]);
  };

  const handleRemoveAssignment = (index: number) => {
    const updatedAssignments = [...assignments];
    updatedAssignments.splice(index, 1);
    setAssignments(updatedAssignments);
  };

  const formatDate = (date:any) => {
    return date ? date.format("DD-MM-YYYY") : "";
  };

  const getValueFromEvent = (date:any) => {
    return date ? date : null;
  };

  const handleFormReset = () => {
    form.resetFields();
  };



  return (
    <div >
   
  <Form<AssignmentFormValues>
      form={form}
      onFinish={onFinish}
      className="form"
      style={{ maxWidth: "400px", padding: "20px" ,margin:"auto"}}
    >
         <h2>Add Assignment</h2>
      <Form.Item
        name="class"
        rules={[{ required: true, message: "Please select the class" }]
       
      }
      >
        <Select<number>  placeholder="Select Class" className="select" suffixIcon={<BookOutlined />}>
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <Option key={num} value={num}>
              {num}  
            </Option>
          ))}
        </Select>
      </Form.Item>
    

      <Form.Item
            name="teacher"
            rules={[{ required: true, message: "Please select teacher" }]}
          >
            <Select<string> placeholder="Choose Teacher" className="select" suffixIcon={<UserOutlined/>}>

            {
              allteachers.map((e)=>{
                return    <Option value={e.name}>{e.name} <Text type="secondary" style={{ fontSize: '12px',color:"orange" }}> (Teacher) </Text></Option>
              })
            }
           {
             alladmin.map((e)=>{
                return    <Option value={e.name}> {e.name} <Text type="secondary" style={{ fontSize: '12px',color:"orange" }}> (Admin ) </Text>
              
              </Option>
              })
            }
            </Select>
          </Form.Item>

      {/* /////////////////////////////////////////////////////////////////// */}
      <Form.Item
        name="assignmet_topic"
        rules={[{ required: true, message: "Please enter the assignment topic" }]}
      >
        <Input prefix={<TeamOutlined />} placeholder="Assignment Topic" />
      </Form.Item>
      {assignments.map((assignment, index) => (
        <div key={index} className="assignment-item">
          <Form.Item
            name={[index, "tag"]}
            rules={[{ required: true, message: "Please select a tag" }]}
          >
            <Select<string> placeholder="Tag" className="select">
              <Option value="h1">h1</Option>
              <Option value="h2">h2</Option>
              <Option value="h3">h3</Option>
              <Option value="h4">h4</Option>
              <Option value="h5">h5</Option>
              <Option value="h6">h6</Option>
              <Option value="p">p</Option>
              <Option value="li">li</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={[index, "message"]}
            rules={[{ required: true, message: "Please enter a message" }]}
        
          >
            <Input placeholder="Message" />
          </Form.Item>
          <Button
            type="dashed"
            onClick={() => handleRemoveAssignment(index)}
            block
          >
            Remove Assignment
          </Button>
        </div>
      ))}
      <Form.Item>
        <Button type="dashed" onClick={handleAddAssignment} block>
          Add Assignment
        </Button>
      </Form.Item>
    
      <Form.Item
  name="timeLine"
  rules={[{ required: true, message: "Please select a date" }]}
  getValueFromEvent={getValueFromEvent}
>
  <DatePicker placeholder="Select a date" format="MM-DD-YY" className="select" />
</Form.Item>
<div style={{display:"flex",justifyContent:"center"}}>
<Form.Item>
        <Button type="primary" htmlType="submit">
         {loading?"Adding...":"Add"}
        </Button>
      </Form.Item>
      <Button
            type="default"
            onClick={handleFormReset}
            style={{ marginLeft: 10 }}
            icon={<ReloadOutlined />}
          >
            Refresh
          </Button>
</div>
    
    </Form>
    </div>
  
  );
};

export default Addassignment;
