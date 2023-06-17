import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import Assignment from "./Assignment";
import UserCharts from "./BarChart";
import DoughnutChartfun from "./ChartData";
import ChartData from "./ChartData";
import Attendence from "./Attendence";
import AppStatus from "./AppStatus";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem("Statistics", "1", <PieChartOutlined />),
  getItem("Assignment", "2", <DesktopOutlined />),
  getItem("UserInfo", "sub1", <UserOutlined />, [
    getItem("Attendence", "3"),
    getItem("Application Status", "4"),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Files", "9", <FileOutlined />),
];

const DashBoardComp: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [assignment,setassignment]=useState<boolean>(false)
  const [attendence,setattendence]=useState<boolean>(false)
  const [stats,setstats]=useState<boolean>(false)
  const [userinfo,setuserinfo]=useState<boolean>(false)
 
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handlecomponents = (e: any) => {
    let value = e.domEvent.target.innerText;

    if(value=="Assignment"){
      setassignment(true)
      setstats(false)
      setattendence(false)
    }else if(value=="Attendence"){
      setattendence(true)
      setassignment(false)
      setstats(false)
    }else if(value=="Application Status"){
      setattendence(false)
      setassignment(false)
      setstats(true)
    }


  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={(e) => handlecomponents(e)}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "0 16px" }}>
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb> */}
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >
            {/* <ChartData/> */}
            {assignment && <Assignment />}
            {attendence && <Attendence />}
            {stats && <AppStatus />}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Teachme ©2023 Created by Teachme
        </Footer>
      </Layout>
    </Layout>
  );
};

export default DashBoardComp;
