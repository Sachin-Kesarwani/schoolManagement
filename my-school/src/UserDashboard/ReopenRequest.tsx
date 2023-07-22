import React, { useState, useRef } from 'react';
import { ExclamationCircleFilled } from '@ant-design/icons';
import { Button, Input, Modal, Space } from 'antd';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useAppDispatch } from '../Redux/Store';
import { UPDATETHEREOPENREQUEST } from '../Redux/Dashboard/types.dash';

const { confirm } = Modal;

const ReopenRequest = ({ id }: { id: string }) => {
  const reasonRef = useRef<string>('');
let dispatch=useAppDispatch()
  const showConfirm = () => {
    confirm({
      title: 'Do you want to reopen this request?',
      icon: <ExclamationCircleFilled />,
      content: (
        <div>
          <Input
            onChange={(e) => (reasonRef.current = e.target.value)}
            placeholder='Write Reason for Reopening'
          />
        </div>
      ),
      okText: 'Reopen', // Change the OK button text
      onOk() {
        reopenRequest(reasonRef.current); // Pass the reason from the ref to reopenRequest
      },
      onCancel() {
      
      },
    });
  };

  
  async function reopenRequest(reason: string) {
    let token = Cookies.get('SchooleManagementUserToken');

    try {
      const response = await axios.patch(
        `http://localhost:8080/request/reopenRequest/${id}`,
        { reason_message: reason },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      dispatch({type:UPDATETHEREOPENREQUEST,payload:response.data.updatedRequest})
   
    } catch (error) {
     
    }
  }

  return (
    <Space wrap>
      <Button onClick={showConfirm}>Reopen</Button>
    </Space>
  );
};

export default ReopenRequest;
