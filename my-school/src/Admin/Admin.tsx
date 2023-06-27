// import React, { useEffect, useState } from 'react';
// // import './index.css';
// import {
//   DesktopOutlined,
//   FileOutlined,
//   PieChartOutlined,
//   TeamOutlined,
//   UserOutlined,
// } from '@ant-design/icons';
// import type { MenuProps } from 'antd';
// import { Breadcrumb, Layout, Menu, theme } from 'antd';
// import { ToastContainer, toast } from 'react-toastify';
// import MenuItem from 'antd/es/menu/MenuItem';
// import axios from 'axios';

// const { Header, Content, Footer, Sider } = Layout;

// type MenuItem = Required<MenuProps>['items'][number];

// function getItem(
//   label: React.ReactNode,
//   key: React.Key,
//   icon?: React.ReactNode,
//   children?: MenuItem[]|null,
// ): MenuItem {
//   return {
//     key,
//     icon,
//     children,
//     label,
//   } as MenuItem;
// }

// const items: MenuItem[] = [
//   getItem('Option 1', '1', <PieChartOutlined />),
//   getItem('Students', '2', <DesktopOutlined />,[
//     getItem('Tom', '3'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Teachers', 'sub1', <UserOutlined />, [
//     getItem('Tom', '3'),
//     getItem('Bill', '4'),
//     getItem('Alex', '5'),
//   ]),
//   getItem('Managers', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//   getItem('Files', '9', <FileOutlined />),
// ];

// const Admin: React.FC = () => {
//   const [collapsed, setCollapsed] = useState(false);
//   let [showwelcomeToast,setwelcomeToast]=useState<Boolean>(true)
//   const [item, setItems] = useState<MenuItem[]>(items);
//   const {
//     token: { colorBgContainer },
//   } = theme.useToken();
//   function toastemitter(){
//     toast.success('🦄 ! Welcome To Admin Panel !', {
//       position: "top-center",
//       autoClose: 3000,
//       hideProgressBar: false,
//       closeOnClick: true,

//       draggable: true,
//       progress: undefined,
//       theme: "light",
//       });

//    setwelcomeToast(false)
//   }

//   useEffect(()=>{
//     if(showwelcomeToast){
//       toastemitter()
//     }
//     getdata()
//   },[])

//   function getdata(){
// axios.get("https://jsonplaceholder.typicode.com/users")
// .then((res)=>{

//   let arr:any=[]
//   for(let i=0;i<res.data.length;i++){

//    arr.push(getItem(res.data[i]["name"],res.data[i]["website"]))
//   }

//  let array= item.map(e => {

//     if (e && 'label' in e) {
//       if(e.label==="Teachers"){
//         if("children" in e){
//          return {...e,children:arr}
//         }

//       }
//     }else {

//     }
//     return e
//   })
//  setItems(array)

// }).catch((er)=>{
//   console.log(er)
// })
//   }
//   console.log(item)
//   return (
//     <>
//     <Layout style={{ minHeight: '100vh' }}>
//       <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
//         <div className="demo-logo-vertical" />
//         <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={item} />
//       </Sider>
//       <Layout>
//         <Header style={{ padding: 0, background: colorBgContainer }} />
//         <Content style={{ margin: '0 16px' }}>
//           <Breadcrumb style={{ margin: '16px 0' }}>
//             <Breadcrumb.Item>User</Breadcrumb.Item>
//             <Breadcrumb.Item>Bill</Breadcrumb.Item>
//           </Breadcrumb>
//           <div style={{ padding: 24, minHeight: 360, background: colorBgContainer ,color:"black"}}>
//           <h1 style={{color:"black"}}>Hello world</h1>

//           </div>
//         </Content>
//         <Footer style={{ textAlign: 'center' }}>Ant Design ©2023 Created by Ant UED</Footer>
//       </Layout>

//     </Layout>
//     <ToastContainer
// position="top-right"
// autoClose={5000}
// hideProgressBar={false}
// newestOnTop={false}
// closeOnClick
// rtl={false}
// pauseOnFocusLoss
// draggable
// pauseOnHover
// theme="light"
// />
// {/* Same as */}
// <ToastContainer />
//     </>
//   );
// };

// export default Admin;
import React, { useEffect, useState } from "react";
import "./adminPage.css";
import { Turn as Hamburger } from 'hamburger-react'
import { RiDashboardLine } from "react-icons/ri";
import MobileDrawer from "./Drawer";
import Cookies from "js-cookie";
import { Badge } from "antd";
import { ToastContainer, toast } from "react-toastify";
import DashBoard from "../Pages/DashBoard";
import Users from "./Users";
import Teachers from "./Teachers";
import Alladmins from "./AllAdmins";
import Students from "./students";
import Requests from "./Requests";
import Addadmin from "./Addadmin";
import Dashboard from "./Dashboard";
import { PlusCircleOutlined } from "@ant-design/icons";
import MyForm from "./Test";
import Addassignment from "./Addassignmet";
interface arrinter {
  title: String;
  key?: number;
  icon?: String;
}
let obj = { position: "User" };
let arr: arrinter[] = [
  { title: "Dashboard", key: 1 },
  { title: "Users", key: 2 },
  { title: "Teachers", key: 3 },
  { title: "Admins", key: 4 },
  { title: "Students", key: 5 },
  { title: "Requests", key: 6},
  { title: "Add New One", key: 7},
  { title: "Add Assignment", key: 8}
];

const Admin = () => {
  let [subhead, setsubhead] = useState<arrinter[]>(arr);
  let [showwelcomeToast,setwelcomeToast]=useState<Boolean>(true)
  let data=Cookies.get("SchooleManagementAdminData")||"{position:User}"
  let  admindata=JSON.parse(data)
 
  let [active, setActive] = useState(1);
  const [isOpen, setOpen] = useState(false)
  function handleChangesubheading(val: number) {
    setActive(val);
  }

  function openDrawer(){

  }

    function toastemitter(){
    toast.success('🦄 ! Welcome To Admin Panel !', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,

      draggable: true,
      progress: undefined,
      theme: "light",
      });

   setwelcomeToast(false)
  }
useEffect(()=>{
  toastemitter()
},[])
console.log(admindata)
  return (
    <>
    <div style={{fontFamily:"sans-serif"}}>
      <div className="maindiv" >
        <div className="maindivSubheading">
          {subhead.map((el, i) => {
            return (
              <div
                onClick={() => handleChangesubheading(i + 1)}
                key={el.key}
                className="eachdivSubheading"
                style={{
                  display:
                  admindata.position === "Admin" && el.title === "Teachers"
                      ? "none": (admindata.position === "Admin"||admindata.position === "Teacher" )&& el.title === "Add New One"?"none"
                      : "block",
                      borderLeft:active===el.key?"3px solid blue":"white",
                      backgroundColor:active===el.key?"white":"rgb(240, 248, 255)",
                }}
              >
                <h2
                  style={{
                    color: "black",
                    fontFamily: "sans-serif",
                    textAlign: "justify",
                  }}
                >
                  {el.title} {el.title==="Add New One"?<PlusCircleOutlined/>:null} {el.title==="Requests"? <Badge count={20} showZero color='#faad14' />:null}
                </h2>
              </div>
            );
          })}
        </div>
        <div className="hamburggerDiv">
        {/* <Hamburger toggled={isOpen} toggle={setOpen} /> */}
        {/* <Hamburger  size={20} /> */}
        <MobileDrawer/>
        </div>
        <div className="subheadingDetails">
          <div >
<h2 style={{color:"black",textAlign:"left",fontFamily:"sans-serif"}}> 👋 , {admindata.name}</h2>
          </div>
   {
    active===1?<Dashboard/>:active===2?<Users/>:active===3?<Teachers/>:active===4?<Alladmins/>:active===5?<Students/>:active===6?<Requests/>:active===7?<Addadmin/>:active===8?<Addassignment/>:null
   }


        </div>
      </div>
    </div>
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"
/>
    </>
  );
};

export default Admin;
