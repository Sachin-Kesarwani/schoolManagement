import React ,{useContext}from 'react';
import { DownOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Avatar, Button, Dropdown, Space } from 'antd';
import { context } from '../Context/Context';
import { useNavigate } from 'react-router-dom';
import Cookies from 'js-cookie';

// const items: MenuProps['items'] = [
//   {
//     label: (
//       <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/dashboard">
//         Go to dashboard
//       </a>
//     ),
//     key: '0',
//   },
//   {
//     label: (
    
//         <Button onClick={logouttouser}>
//         Logout
//         </Button>

//     ),
//     key: '1',
//   },
//   {
//     type: 'divider',
//   }
// ];

const AccountDropdown = () => {
    let navigate=useNavigate()
    let {authorized,username, checkforAuthentication,setAuthorized}=useContext(context)
    const logouttouser = () => {
        setAuthorized(false)
        Cookies.remove('SchooleManagementUserToken');
        Cookies.remove('SchooleManagementUserData');

            navigate('/');
    
       
      };
    const items: MenuProps['items'] = [
        {
          label: (
            <a target="_blank" rel="noopener noreferrer" href="http://localhost:3000/dashboard">
              Go to dashboard
            </a>
          ),
          key: '0',
        },
        {
          label: (
          
              <Button onClick={logouttouser}>
              Logout
              </Button>
      
          ),
          key: '1',
        },
        {
          type: 'divider',
        }
      ];
  
  
  
  return <Dropdown  menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      <Avatar style={{ backgroundColor: '#87d068' }} icon={<UserOutlined />} /> {username}
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
};

export default AccountDropdown