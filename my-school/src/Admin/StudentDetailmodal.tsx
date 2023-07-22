import React, { useEffect, useState } from 'react';
import { Button, Modal, Table } from 'antd';
import { useAppSelector } from '../Redux/Store';
import { inidataType } from '../utils/data.types';


interface DataItem {
  key: string;
  label: string;
  value: string;
}
const StudentDetail = ({id}:{id:string}) => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  let [name,setName]=useState<string>("")
  let [studentDetail,setStudentDetail]=useState<DataItem[]>([])
  let allEnrolledStudents=useAppSelector((state) => (state.AdminReducer as inidataType).enrolledStudents)
  
  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };


  function getStudents(){
    let data=allEnrolledStudents.filter((e:any)=>{
      return e._id===id
    })
  
console.log(data)
    if(data.length>0){
      setName(data[0].name)
      const dataSource = Object.entries(data[0]).map(([key, value]) => ({
        key,
        label: key.toUpperCase(),
        value: typeof value === 'boolean' && key==="transport" ? "Not Alloted":typeof value === 'boolean' ?(value ? 'Paid' : 'Not Paid') : value
      }));
  
       setStudentDetail(dataSource)
    }
   
  }
  useEffect(()=>{
    getStudents()
  },[])
  // console.log(allEnrolledStudents,id)
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

  return (
    <>
      <Button  onClick={showModal}>
        See
      </Button>
      <Modal
        open={open}
        
        title={`${name} Details`}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          // <Button key="submit" type="primary" loading={loading} onClick={handleOk}>
          //   Submit
          // </Button>
        
        ]}
      >
        {
     
       studentDetail &&  <Table columns={columns} dataSource={studentDetail} pagination={false} />
      }
   
      </Modal>
    </>
  );
};

export default StudentDetail;