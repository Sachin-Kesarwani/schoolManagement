// import React, { useState } from "react";
// import { Form, Input, Select, Button, message } from "antd";
// import {
//   UserOutlined,
//   MailOutlined,
//   DollarOutlined,
//   TeamOutlined,
//   LockOutlined,
//   PlusOutlined,
//   PlusCircleOutlined,
// } from "@ant-design/icons";
// import { useAppDispatch } from "../Redux/Store";
// import { addnewoneToorganisation } from "../Redux/AdminRedux/action";

// const { Option } = Select;

// const data = {
//   name: "Uzair Sheikh",
//   email: "uzairsheikh@gmail.com",
//   position: "Manager",
//   password: "uzairsheikh",
//   salary_permoth: 10000,
// };

// const Addadmin = () => {
//   let [checkforteacher, setCheckforTeacher] = useState<String>("");
//   const [form] = Form.useForm();
//   let dispatch = useAppDispatch();
//   const [messageApi, contextHolder] = message.useMessage();
//   const onFinish = (values: any) => {
//     console.log("Form values:", values);
//     dispatch(addnewoneToorganisation(values)).then((res: any) => {
//       console.log(res);
//       if (res.request.status === 200) {
//         messageApi.open({
//           type: "success",
//           content: res.data.msg,
//         });
//       } else if (res.request.status === 400) {
//         messageApi.open({
//           type: "error",
//           content: res.response.data.msg,
//         });
//       } else if (res.request.status === 401) {
//         messageApi.open({
//           type: "error",
//           content: res.response.data.msg,
//         });
//       } else if (res.request.status === 403) {
//         messageApi.open({
//           type: "warning",
//           content: res.response.data.msg,
//         });
//       }
//     });
//   };
//   function handleCheck(val: String) {
//     setCheckforTeacher(val);
//   }
//   return (
//     <>
//       {contextHolder}
//       <h2 style={{ color: "black" }}>
//         Add New One <PlusCircleOutlined />
//       </h2>
//       <Form
//         form={form}
//         onFinish={onFinish}
//         initialValues={data}
//         className="form"
//       >
//         <Form.Item
//           name="name"
//           rules={[{ required: true, message: "Please enter his/her name" }]}
//         >
//           <Input prefix={<UserOutlined />} placeholder="Name" />
//         </Form.Item>
//         <Form.Item
//           name="email"
//           rules={[
//             {
//               required: true,
//               message: "Please enter his/her email",
//               type: "email",
//             },
//           ]}
//         >
//           <Input type="email" prefix={<MailOutlined />} placeholder="Email" />
//         </Form.Item>
//         <Form.Item
//           name="position"
//           rules={[
//             { required: true, message: "Please select his/her position" },
//           ]}
//         >
//           <Select
//             placeholder="Position"
//             onChange={handleCheck}
//             className="select"
//           >
//             <Option value="">
//               <TeamOutlined />
//             </Option>
//             <Option value="Manager">Manager</Option>
//             <Option value="Admin">Admin</Option>
//             <Option value="Teacher">Teacher</Option>
//           </Select>
//         </Form.Item>
//         {checkforteacher === "Teacher" ? (
//           <Form.Item
//             name="preffered_subject"
//             rules={[
//               {
//                 required: true,
//                 message: "Please select his/her preffered_subject",
//               },
//             ]}
//           >
//             <Select placeholder="Add Preffered Subject" className="select">
//               <Option value="Hindi">Hindi</Option>
//               <Option value="English">English</Option>
//               <Option value="Math">Math</Option>
//               <Option value="Physics">Physics</Option>
//               <Option value="Chemistry">Chemistry</Option>
//               <Option value="Biology">Biology</Option>
//               <Option value="Drawing">Drawing</Option>
//               <Option value="GK">General Knowledge</Option>
//               <Option value="Moral">Moral Science</Option>
//             </Select>{" "}
//           </Form.Item>
//         ) : null}
//         <Form.Item
//           name="password"
//           rules={[{ required: true, message: "Please enter his/her password" }]}
//         >
//           <Input.Password prefix={<LockOutlined />} placeholder="Password" />
//         </Form.Item>
//         <Form.Item
//           name="salary_permoth"
//           rules={[{ required: true, message: "Please enter his/her salary" }]}
//         >
//           <Input
//             prefix={<DollarOutlined />}
//             placeholder="Salary per month"
//             type="number"
//           />
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" htmlType="submit">
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//     </>
//   );
// };

// export default Addadmin;

import React, { useState } from "react";
import { Form, Input, Select, Button, message } from "antd";
import {
  UserOutlined,
  MailOutlined,
  DollarOutlined,
  TeamOutlined,
  LockOutlined,
  PlusOutlined,
  PlusCircleOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import { useAppDispatch } from "../Redux/Store";
import { addnewoneToorganisation } from "../Redux/AdminRedux/action";

const { Option } = Select;

// const data = {
//   name: "Uzair Sheikh",
//   email: "uzairsheikh@gmail.com",
//   position: "Manager",
//   password: "uzairsheikh",
//   salary_permoth: 10000,
// };

const Addadmin = () => {
  const [checkforteacher, setCheckforTeacher] = useState<string>("");
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = (values: any) => {
    console.log("Form values:", values);
    dispatch(addnewoneToorganisation(values)).then((res: any) => {
      console.log(res);
      if (res.request.status === 200) {
        messageApi.open({
          type: "success",
          content: res.data.msg,
        });
      } else if (res.request.status === 400) {
        messageApi.open({
          type: "error",
          content: res.response.data.msg,
        });
      } else if (res.request.status === 401) {
        messageApi.open({
          type: "error",
          content: res.response.data.msg,
        });
      } else if (res.request.status === 403) {
        messageApi.open({
          type: "warning",
          content: res.response.data.msg,
        });
      }
    });
  };

  const handleCheck = (value: string) => {
    setCheckforTeacher(value);
  };

  const handleFormReset = () => {
    form.resetFields();
    setCheckforTeacher("")
  };

  return (
    <>
      {contextHolder}
      <h2 style={{ color: "black" }}>
        Add New One <PlusCircleOutlined />
      </h2>
      <Form
        form={form}
        onFinish={onFinish}
        // initialValues={data}
        className="form"
      >
        <Form.Item
          name="name"
          rules={[{ required: true, message: "Please enter his/her name" }]}
        >
          <Input prefix={<UserOutlined />} placeholder="Name" />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please enter his/her email",
              type: "email",
            },
          ]}
        >
          <Input
            type="email"
            prefix={<MailOutlined />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="position"
          rules={[
            { required: true, message: "Please select his/her position" },
          ]}
        >
          <Select
            placeholder="Position"
            onChange={handleCheck}
            className="select"
          >
            <Option value="">
              <TeamOutlined />
            </Option>
            <Option value="Manager">Manager</Option>
            <Option value="Admin">Admin</Option>
            <Option value="Teacher">Teacher</Option>
          </Select>
        </Form.Item>
        {checkforteacher === "Teacher" && (
          <Form.Item
            name="preferred_subject"
            rules={[
              {
                required: true,
                message: "Please select his/her preferred_subject",
              },
            ]}
          >
            <Select
              placeholder="Preferred Subject"
              className="select"
            >
              <Option value="Hindi">Hindi</Option>
              <Option value="English">English</Option>
              <Option value="Math">Math</Option>
              <Option value="Physics">Physics</Option>
              <Option value="Chemistry">Chemistry</Option>
              <Option value="Biology">Biology</Option>
              <Option value="Drawing">Drawing</Option>
              <Option value="GK">General Knowledge</Option>
              <Option value="Moral">Moral Science</Option>
            </Select>
          </Form.Item>
        )}
        <Form.Item
          name="password"
          rules={[
            { required: true, message: "Please enter his/her password" },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined />}
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item
          name="salary_permoth"
          rules={[
            { required: true, message: "Please enter his/her salary" },
          ]}
        >
          <Input
            prefix={<DollarOutlined />}
            placeholder="Salary per month"
            type="number"
          />
        </Form.Item>
        <div style={{display:"flex",justifyContent:"center"}}>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
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
    </>
  );
};

export default Addadmin;

