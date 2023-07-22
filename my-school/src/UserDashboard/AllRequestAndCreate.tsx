import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/Store";
import { getAllStudentsRequests } from "../Redux/Dashboard/action.dash";
import AddNewRequest from "./AddNewRequest";
import { inidatainter } from "../Redux/Dashboard/reducer.dash";
import { Button, Card, Select } from "antd";
import { Option } from "antd/es/mentions";
import EachRequest from "./EachRequest";
import { RaisesdrequestInter } from "../utils/data.types";
import "./style.css";
const AllRequestAndCreate = () => {
  let [showform, setShowform] = useState(false);
  let studentdata = useAppSelector(
    (store) => (store.Dashreducer as inidatainter).allStudentsdata
  );
  let allrequests = useAppSelector(
    (store) => (store.Dashreducer as inidatainter).allRequestofEachStudents
  );
  let dispatch = useAppDispatch();

  function handleChange(studentID: string) {
    dispatch(getAllStudentsRequests(studentID)).then((res: any) => {
      console.log(res);
    });
  }
  console.log(allrequests, "26");
  return (
    <>
      <div style={{display:"flex",justifyContent:"flex-end",gap:"10px",margin:"8px"}}>
       
        {!showform && (
          <Select
            defaultValue="Select Your Child Name"
            style={{ width: "200px" }}
            onChange={(value) => handleChange(value)}
          >
            <Option value=""> Student Name</Option>

            {studentdata.map((e) => {
              return (
                <Option value={e._id}>
                  {e.name}{" "}
                  <span style={{ color: "orange", fontSize: "12px" }}>
                    Class {e.class}
                  </span>
                </Option>
              );
            })}
          </Select>
        )}
         <Button onClick={() => setShowform(!showform)}>
          {showform ? "Close Form" : "Create Request"}{" "}
        </Button>
      </div>

      {!showform && (
        <div>
          <div className="eachCardParentDiv">
            {allrequests &&
              allrequests.length > 0 &&
              allrequests.map((e: any) => {
                return <EachRequest data={e} />;
              })}
          </div>
        </div>
      )}
      {showform && (
        <Card
          title={<h3 style={{ color: "blue" }}>{"Add New Request"}</h3>}
          style={{ backgroundColor: "#f5f5f0", width: "98%", margin: "auto" }}
        >
          <AddNewRequest />
        </Card>
      )}
    </>
  );
};

export default AllRequestAndCreate;
