import { Tabs } from 'antd';
import { AppleOutlined, AndroidOutlined ,UserOutlined ,EditOutlined, SendOutlined } from '@ant-design/icons';


import StudentAssignment from './StudentAssignment';
import AllRequestAndCreate from './AllRequestAndCreate';
import StudentDetails from './StudentDetails';
import Cookies from 'js-cookie';

import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { useAppDispatch } from '../Redux/Store';
import { getAllStudentsOfusers } from '../Redux/Dashboard/action.dash';

const MyTabbedInterface = () => {
  const { TabPane } = Tabs;
  const location =useLocation()
  const queryParams = new URLSearchParams(location.search);
let dispatch=useAppDispatch()
  const name = queryParams.get('type');
let Cookieuserdata=Cookies.get("SchooleManagementUserData") ||"{name:Sachin}"
let userdata=JSON.parse(Cookieuserdata)


useEffect(()=>{
   dispatch(getAllStudentsOfusers())
},[])

  return (
    <Tabs defaultActiveKey={name==="studentdetails"?"1":name==="assignments"?"2":name==="createrequests"?"3":"1"}>
      {[UserOutlined ,EditOutlined, SendOutlined ].map((Icon, i) => {
        const id = String(i + 1);

        return (
          <TabPane tab={id==="1"? <Link to="/dashboard?type=studentdetails"><Icon/>User Details</Link>:id==="2"? <Link to="/dashboard?type=assignments"><Icon/>Assignments</Link>: <Link to="/dashboard?type=createrequests"><Icon/>Create Requests</Link>} key={id}>
            {name === 'studentdetails' ? <StudentDetails/>: name==="assignments"?<StudentAssignment/>:<AllRequestAndCreate/>}
          </TabPane>
        );
      })}
    </Tabs>
  );
};

export default MyTabbedInterface;
