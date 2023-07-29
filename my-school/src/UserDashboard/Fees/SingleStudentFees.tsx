import React, { useEffect, useState } from 'react';
import { studentData } from '../../utils/data.types';
import { Avatar, Badge, Button, Card, Collapse, Table, Tag, Tooltip } from 'antd';
import Payment from "./Payment"
import Cookies from 'js-cookie';
import "./fee.css"
interface DataItem {
  key: string;
  label: string;
  value: string;
  feeStatus: boolean; 
  month:string
}
const { Panel } = Collapse;
const SingleStudentFees = ({ data }: { data: studentData}) => {
  let [studentImage, setStudentImage] = useState("");
  let [feedata, setFeedata] = useState<DataItem[]>([]);
  let [name,setName]=useState(data.name)
  let Cookieuserdata =
  Cookies.get("SchooleManagementUserData") || "{name:Sachin}";
let userdata = JSON.parse(Cookieuserdata);

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
        month:key,
        value: typeof value === "boolean" ? (value ? "Paid" : "Not Paid") : String(value), // Ensure value is always a string
        feeStatus:value
      }));

    setFeedata(allFeesData);
  }

  useEffect(() => {
    createKeyAndvalueforstudentDetaails();
  }, []);

  const columns = [
    {
        title: 'Month',
        dataIndex: 'label',
        key: 'label',
        className: 'table-cell-ellipsis',
        render:(title:string)=>{
          return <Tooltip title={title} color={"blue"} key={title}>
           <div style={{overflow:"auto",textOverflow:"ellipsis",textAlign:"center"}}>
               {title}
          </div>
          </Tooltip> 
        }
      },
      {
        title: 'Status',
        dataIndex: 'value',
        key: 'value',
        className: 'table-cell-ellipsis',
        render: (value:string) => (
          <Tag color={ value === 'Not Paid' ? 'red' : 'green' } key={value}>
              {value.toUpperCase()}
            </Tag>
          // <Tag style={{ backgroundColor: value === 'Not Paid' ? 'red' : 'green' ,padding:"5px 15px",borderRadius:"15px",color:value==="Not Paid"?"white":"white",}}>
          //   {value}
          // </Tag>
        ),
      },
      {
        title: 'Pay Now',
        dataIndex: 'label', // We'll use 'label' as dataIndex since it contains the label text
        key: 'pay',
        render: (label:string, record: DataItem) => ( // Custom render function for the 'Pay' column

        <Payment
        idofstudent={data._id}
        month={record.month}
        name={data.name}
        email={userdata.email}
        feeStatus={record.feeStatus}
        fees={500}
      />
        //   <Button onClick={() => console.log('Pay clicked for:', label)}>Pay</Button>
        ),
      },
  ];

  return (
    <Collapse>
  
      
      <Panel style={{width:"98%",margin:"auto",}} key={data._id}  header={<div style={{ display: 'flex', alignItems: 'center' }}><Avatar    
            style={{ cursor: 'pointer' }} src={data.student_image}/> <h3 style={{color:"black"}}>{name}</h3></div>}>
          <Card style={{border:"1px solid black"}}>
 
        <div className='table-container'>
        <Table scroll={{ y: 240 }}  dataSource={feedata}  pagination={false} columns={columns} />

        </div>
     
 
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