import React from 'react';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';

const Attendence: React.FC = () => (
    <>
   
    <h1 style={{color:"black",fontSize:"30px",textAlign:"center",marginBottom:"50px"}}>Attendence</h1>
  <Row gutter={16}>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Active"
          value={0}
          precision={2}
          valueStyle={{ color: 'red' }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Idle"
          value={0}
          precision={2}
          valueStyle={{ color: 'green' }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
          />
      </Card>
    </Col>
  </Row>
          </>
);

export default Attendence;