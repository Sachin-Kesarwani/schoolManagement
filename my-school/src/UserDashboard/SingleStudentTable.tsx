import { Card, Col, Image, Row, Table } from "antd";
import React, { useEffect, useState } from "react";
import { studentData } from "../utils/data.types";
import {
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  TableOutlined,
} from "@ant-design/icons";

interface DataItem {
  key: string;
  label: string;
  value: string;
}
const SingleStudentTable = ({ data }: { data: studentData }) => {
  let [displaydata, setDisplaydata] = useState<DataItem[]>([]);
  let [studentimage, setstudentImage] = useState("");
  let [parentimage, setparentimage] = useState("");
  function createKeyAndvalueforstudentDetaails() {
    if (data.student_image) {
      setstudentImage(data.student_image);
    }
    if (data.parent_image) {
      setparentimage(data.parent_image);
    }
    const dataSource = Object.entries(data)
      .filter(([key]) => key !== "student_image" && key !== "parents_image")
      .map(([key, value]) => ({
        key,
        label: key.toUpperCase(),
        value:
          typeof value === "boolean" && key === "transport"
            ? "Not Alloted"
            : typeof value === "boolean" && key === "status"
            ? value
              ? "Process Completed"
              : "In Process"
            : typeof value === "boolean"
            ? value
              ? "Fees Paid"
              : "Fees Not Paid"
            : value,
      }));
    setDisplaydata(dataSource);
  }
  const columns = [
    {
      title: "Label",
      dataIndex: "label",
      key: "label",
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
    },
  ];

  useEffect(() => {
    createKeyAndvalueforstudentDetaails();
  }, []);
  return (
    <Card
      className="eachCard"
      title={
        <>
          {data.status ? (
            <CheckCircleOutlined
              style={{ float: "left", color: "green", fontSize: "30px" }}
            />
          ) : (
            <ExclamationCircleOutlined
              style={{ float: "left", color: "red", fontSize: "30px" }}
            />
          )}
          <h3 style={{ color: "blue" }}>   {
          studentimage&&  <Image preview={false} style={{margin:"auto",borderRadius:"50px"}} width={"50px"} height={"50px"} src={studentimage}/>
          } {data.name.toUpperCase()}</h3>
       
        </>
      }
      style={{ backgroundColor: "#f5f5f0" }}
      bordered={true}
    >
       {/* <Row gutter={16}>
      {
    studentimage.length>0&& <Col   xs={24} sm={12}><Image preview={false} style={{margin:"auto",borderRadius:"10px"}} width={"100px"} height={"100px"} src={studentimage}/></Col>

      }
            {
   parentimage.length>0&&  <Col   xs={24} sm={12}><Image preview={false} style={{margin:"auto",borderRadius:"10px"}} width={"100px"} height={"100px"} src={parentimage}/></Col>
        }
       
        </Row> */}
      <Table
        className="tableofstudentdata"
        columns={columns}
        dataSource={displaydata}
        pagination={false}
      />
    </Card>
  );
};

export default SingleStudentTable;
