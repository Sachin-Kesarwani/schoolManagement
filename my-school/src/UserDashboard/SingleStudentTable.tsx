import { Card, Table } from 'antd';
import React,{useEffect,useState} from 'react'
import { studentData } from '../utils/data.types';
import { CheckCircleOutlined, ExclamationCircleOutlined, TableOutlined } from '@ant-design/icons';

interface DataItem {
    key: string;
    label: string;
    value: string;
  }
const SingleStudentTable = ({data}:{data:studentData}) => {
    let [displaydata,setDisplaydata]=useState< DataItem[]>([])
    function createKeyAndvalueforstudentDetaails(){
        const dataSource = Object.entries(data).map(([key, value]) => ({
          key,
          label: key.toUpperCase(),
          value: typeof value === 'boolean' && key==="transport" ? "Not Alloted":typeof value === 'boolean' &&key==="status"  ?(value ? 'Process Completed' : 'In Process') : typeof value === 'boolean'  ?(value ? 'Paid' : 'Not Paid') :value
        }));
     setDisplaydata(dataSource)
      }
      const columns = [
        {
          title: 'Label',
          dataIndex: 'label',
          key: 'label',
        },
        {
          title: 'Value',
          dataIndex: 'value',
          key: 'value',
        },
      ];
    
      useEffect(()=>{
        createKeyAndvalueforstudentDetaails()
      },[])
  return (
    <Card className='eachCard' title={
    <> 
     {
data.status?<CheckCircleOutlined  style={{ float:"left",color:"green",fontSize:"30px" }} />: <ExclamationCircleOutlined  style={{ float:"left",color:"red",fontSize:"30px" }} />
     }
     <h3 style={{color:"blue"}}>
     {data.name.toUpperCase()}
     </h3>
   </>}
      style={{backgroundColor:"#f5f5f0"}} bordered={true}>
      <Table  className='tableofstudentdata' columns={columns} dataSource={displaydata} pagination={false} />
    </Card>
  )
}

export default SingleStudentTable
