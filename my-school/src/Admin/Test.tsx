// import React, { useState } from "react";
// import { Form, Input, Select, Button, DatePicker } from "antd";
// import {
//   UserOutlined,
//   MailOutlined,
//   TeamOutlined,
//   LockOutlined,
//   DollarOutlined,
// } from "@ant-design/icons";

// const { Option } = Select;

// interface FormValues {
//   class: number;
//   teacher: string;
//   assignmet_topic: string;
//   assignment: {
//     tag: string;
//     message: string;
//     _id: string;
//   }[];
//   timeLine: string;
//   endAssignment: boolean;
// }

// const MyForm: React.FC = () => {
 
//   const onFinish = (values: FormValues) => {
//     console.log(values);
//   };

//   const data: FormValues = {
//     class: 25,
//     teacher: "Amit",
//     assignmet_topic: "Coding dsa",
//     assignment: [
//       {
//         tag: "p",
//         message: "Hello world",
//         _id: "649191188980fb9d9401e1ea",
//       },
//       {
//         tag: "h1",
//         message: "Hello world wwwwwwwddd",
//         _id: "649191188980fb9d9401e1eb",
//       },
//       {
//         tag: "h5",
//         message: "Hello worldwwwwwwwwwwwwwwwwwww",
//         _id: "649191188980fb9d9401e1ec",
//       },
//     ],
//     timeLine: "2023-06-21",
//     endAssignment: false,
//   };

//   return (
//     <Form<FormValues>
//       onFinish={onFinish}
//       initialValues={data}
//       className="form"
//       style={{maxWidth:"400px",padding:"20px"}}
//     >
//       <Form.Item
//         name="class"
//         rules={[{ required: true, message: "Please select the class" }]}
//       >
//         <Select<number> placeholder="Select Class" className="select">
//           {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
//             <Option key={num} value={num}>
//               {num}
//             </Option>
//           ))}
//         </Select>
//       </Form.Item>
//       <Form.Item
//         name="teacher"
//         rules={[{ required: true, message: "Please enter the teacher's name" }]}
//       >
//         <Input prefix={<UserOutlined />} placeholder="Teacher" />
//       </Form.Item>
//       <Form.Item
//         name="assignmet_topic"
//         rules={[{ required: true, message: "Please enter the assignment topic" }]}
//       >
//         <Input prefix={<TeamOutlined />} placeholder="Assignment Topic" />
//       </Form.Item>
//       <Form.List name="assignment">
//         {(fields, { add, remove }) => (
//           <>
//             {fields.map((field) => (
//               <div key={field.key} className="assignment-item">
//                 <Form.Item
//                   {...field}
//                   name={[field.name, "tag"]}
//                  // fieldKey={[field.Key, "tag"]}
//                   rules={[{ required: true, message: "Please select a tag" }]}
//                 >
//                   <Select<string> placeholder="Tag" className="select">
//                     <Option value="h1">h1</Option>
//                     <Option value="h2">h2</Option>
//                     <Option value="h3">h3</Option>
//                     <Option value="h4">h4</Option>
//                     <Option value="h5">h5</Option>
//                     <Option value="h6">h6</Option>
//                     <Option value="p">p</Option>
//                     <Option value="li">li</Option>
//                   </Select>
//                 </Form.Item>
//                 <Form.Item
//                   {...field}
//                   name={[field.name, "message"]}
//                 //  fieldKey={[field.fieldKey, "message"]}
//                   rules={[{ required: true, message: "Please enter a message" }]}
//                 >
//                   <Input placeholder="Message" />
//                 </Form.Item>
//               </div>
//             ))}
//             <Form.Item>
//               <Button type="dashed" onClick={() => add()} block>
//                 Add Assignment
//               </Button>
//               <Button type="dashed" onClick={() => remove()} block>
//                 Add Assignment
//               </Button>
//             </Form.Item>
//           </>
//         )}
//       </Form.List>
    
      
//       <Form.Item>
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </Form.Item>
//     </Form>
//   );
// };

// export default MyForm;
import React, { useState } from "react";
import { Form, Input, Select, Button, DatePicker } from "antd";
import moment, { Moment } from "moment";
import {
  UserOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const { Option } = Select;

interface Assignment {
  tag: string;
  message: string;
}

interface FormValues {
  class: number;
  teacher: string;
  assignmet_topic: string;
  assignment: Assignment[];
}

const MyForm: React.FC = () => {
  const [form] = Form.useForm();
  const [assignments, setAssignments] = useState<Assignment[]>([]);
  const [assignmentss, setAssignmentss] = useState<Assignment[]>([]);
  const onFinish = (values: FormValues) => {
    console.log(values);

    const assignmentValues = Object.values(values).filter(
      (value) => typeof value === "object" &&value.tag&&value.message
    );

    let data={
      class:values.class,
      teacher:values.teacher,
      assignmet_topic:values.assignmet_topic,
      assignment:assignmentValues,
      timeLine:{type:String,required:true},
      endAssignment:{type:Boolean,required:false}
    }
console.log(assignmentValues,"174")
    const newAssignments: Assignment[] = assignmentValues.map(
      (assignmentValue) => {
        return {
          tag: assignmentValue.tag,
          message: assignmentValue.message,
        };
      }
    );

    setAssignmentss(newAssignments);
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
  return (
    <Form<FormValues>
      form={form}
      onFinish={onFinish}
      className="form"
      style={{ maxWidth: "400px", padding: "20px" }}
    >
      <Form.Item
        name="class"
        rules={[{ required: true, message: "Please select the class" }]}
      >
        <Select<number> placeholder="Select Class" className="select">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((num) => (
            <Option key={num} value={num}>
              {num}
            </Option>
          ))}
        </Select>
      </Form.Item>
      <Form.Item
        name="teacher"
        rules={[{ required: true, message: "Please enter the teacher's name" }]}
      >
        <Input prefix={<UserOutlined />} placeholder="Teacher" />
      </Form.Item>
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
            getValueFromEvent={getValueFromEvent
          
          }
      
      
      >
        <DatePicker  placeholder="Select a date"
        
          format="DD-MM-YYYY" 
          className="select" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default MyForm;
