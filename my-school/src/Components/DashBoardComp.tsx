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
import { useNavigate } from "react-router";
import Form from "./FormComp";
import Test from "./Test";

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
  getItem("Admissions", "2", <PieChartOutlined />),
  getItem("Assignment", "3", <DesktopOutlined />),
  getItem("UserInfo", "sub1", <UserOutlined />, [
    getItem("Attendence", "4"),
    getItem("Application Status", "5"),
  ]),
  getItem("Test", "sub2", <TeamOutlined />),
  // getItem("Files", "9", <FileOutlined />),
];

const DashBoardComp: React.FC = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const [value,setvalue]=useState<string>("Statistics")

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const handlecomponents = (e: any) => {
    let v = e.domEvent.target.innerText;
    setvalue(v)
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
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
            }}
          >

          {value==="Test"?<Test/>:value==="Admissions"?<Form />:value==="Assignment"?<Assignment/>:value==="Attendence"?<Attendence/>:value==="Application Status"?<AppStatus />:value==="Statistics"?<ChartData/>:<ChartData />}
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
