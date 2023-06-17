import React from 'react';
import type { StepsProps } from 'antd';
import { Popover, Steps } from 'antd';

const customDot: StepsProps['progressDot'] = (dot, { status, index }) => (
  <Popover
    content={
      <span>
        step {index} status: {status}
      </span>
    }
  >
    {dot}
  </Popover>
);
const description = 'Hover on dot to see more';
const AppStatus: React.FC = () => (
    <>
     
    <h1 style={{color:"black",fontSize:"30px",textAlign:"center",marginBottom:"50px"}}>Application Status</h1>
  <Steps
    current={1}
    progressDot={customDot}
    items={[
      {
        title: 'Registration',
        description,
      },
      {
        title: 'Test',
        description,
      },
      {
          title: 'Approved',
        description,
      }
    ]}
    />
  
    </>
);

export default AppStatus;