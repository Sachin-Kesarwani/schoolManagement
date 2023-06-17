import { Avatar, List, Radio, Space } from 'antd';
import React, { useState } from 'react';

type PaginationPosition = 'top' | 'bottom' | 'both';

type PaginationAlign = 'start' | 'center' | 'end';

const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
];

// const positionOptions = ['bottom', 'both'];

// const alignOptions = ['end', 'center', 'end'];

const Assignment: React.FC = () => {
  const [position, setPosition] = useState<PaginationPosition>('bottom');
  const [align, setAlign] = useState<PaginationAlign>('center');

  return (
    <>
     
    <h1 style={{color:"black",fontSize:"30px",textAlign:"center",marginBottom:"50px"}}>Assignment</h1>
      <Space direction="vertical" style={{ marginBottom: '20px' }} size="middle">
        <Space>
          {/* <span>Pagination Position:</span>
          <Radio.Group
            optionType="button"
            value={position}
            onChange={(e) => {
              setPosition(e.target.value);
            }}
          >
            {positionOptions.map((item) => (
              <Radio.Button key={item} value={item}>
                {item}
              </Radio.Button>
            ))}
          </Radio.Group> */}
        </Space>
        <Space>
          {/* <span>Pagination Align:</span>
          <Radio.Group
            optionType="button"
            value={align}
            onChange={(e) => {
              setAlign(e.target.value);
            }}
          >
            {alignOptions.map((item) => (
              <Radio.Button key={item} value={item}>
                {item}
              </Radio.Button>
            ))}
          </Radio.Group> */}
        </Space>
      </Space>
      <List
        pagination={{ position, align }}
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                // <FontAwesomeIcon icon="fa-solid fa-calculator-simple" />
                <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default Assignment;