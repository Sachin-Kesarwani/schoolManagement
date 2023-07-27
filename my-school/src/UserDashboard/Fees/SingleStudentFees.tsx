import React, { useEffect, useState } from 'react';
import { studentData } from '../../utils/data.types';
import { Avatar, Badge, Button, Card, Collapse, Table } from 'antd';
import Payment from "./Payment"

interface DataItem {
  key: string;
  label: string;
  value: string;
}
const { Panel } = Collapse;
const SingleStudentFees = ({ data }: { data: studentData}) => {
  let [studentImage, setStudentImage] = useState("");
  let [feedata, setFeedata] = useState<DataItem[]>([]);
  let [name,setName]=useState(data.name)
 
  function createKeyAndvalueforstudentDetaails() {
    // Filter out only the keys starting with "transport_fees"
    const allFeesData = Object.entries(data)
      .filter(([key]) =>{
        if (key.startsWith("transport_fees")) {
            return true;
          }
          // Include the additional keys you want (e.g., "april", "august", etc.)
          // Add more keys if needed
          return key === "april" || key === "august" || key === "december" || key === "february" ||
            key === "january" || key === "july" || key === "june" || key === "march" ||
            key === "may" || key === "november" || key === "october" || key === "september";
        }).map(([key, value]) => ({
        key,
        label: key.toUpperCase(),
        value: typeof value === "boolean" ? (value ? "Paid" : "Not Paid") : String(value), // Ensure value is always a string
      }));

    setFeedata(allFeesData);
  }

  useEffect(() => {
    createKeyAndvalueforstudentDetaails();
  }, []);

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
        render: (value:string) => (
          <span style={{ backgroundColor: value === 'Not Paid' ? 'red' : 'green' ,padding:"5px",borderRadius:"15px",color:value==="Not Paid"?"white":"black"}}>
            {value}
          </span>
        ),
      },
      {
        title: 'Pay',
        dataIndex: 'label', // We'll use 'label' as dataIndex since it contains the label text
        key: 'pay',
        render: (label:string) => ( // Custom render function for the 'Pay' column
        <Payment
        idofAdmin={data._id}
        month={"january"}
        name={data.name}
        email={"abc@gmail.com"}
        salaryStatus={data.january}
        salary_amount={500}
      />
        //   <Button onClick={() => console.log('Pay clicked for:', label)}>Pay</Button>
        ),
      },
  ];
  console.log(feedata,data)
  return (
    <Collapse>
  
      
      <Panel style={{width:"95%",margin:"auto"}} key={data._id}  header={<div style={{ display: 'flex', alignItems: 'center' }}><Avatar    
            style={{ cursor: 'pointer' }} src={data.student_image}/> <h3 style={{color:"black"}}>{name}</h3></div>}>
          <Card style={{border:"1px solid black"}}>
 
        
        <Table  dataSource={feedata}  pagination={false} columns={columns} />
     
 
     </Card>
    </Panel>
   
    </Collapse>
    
  );
};

export default SingleStudentFees;


  //      <div
    //      style={{
    //        display: "flex",
    //        justifyContent: "space-around",
    //        alignItems: "center",
    //        borderBottom: "1px solid grey",
    //      }}
    //    >
    //      <p style={{ alignSelf: "flex-start" }}>{item.label}</p>

    //      <Badge
    //        style={{ width: "50px" }}
    //        overflowCount={99999999}
    //        count={"₹" + 600}
    //        showZero
    //        color={item.value==="Paid" ? "green" : "blue"}
    //      />
    //      {/* <Payment
    //        idofAdmin={data._id}
    //        month={"january"}
    //        name={data.name}
    //        email={data.email}
    //        salaryStatus={data.january}
    //        salary_amount={data.salary_permoth}
    //      /> */}
    //    </div>
    //     // <div key={item.key}>
    //     //   <span>{item.label}: </span>
    //     //   <span>{item.value}</span>
    //     // </div>