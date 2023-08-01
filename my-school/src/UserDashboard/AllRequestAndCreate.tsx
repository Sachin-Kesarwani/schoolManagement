import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../Redux/Store";
import { getAllStudentsRequests } from "../Redux/Dashboard/action.dash";
import AddNewRequest from "./AddNewRequest";
import { inidatainter } from "../Redux/Dashboard/reducer.dash";
import { Button, Card, Image, Select } from "antd";
import { Option } from "antd/es/mentions";
import EachRequest from "./EachRequest";
import { RaisesdrequestInter } from "../utils/data.types";
import "./style.css";
import Loader from "./Loader/Loader";
import LoadingModal from "../Admin/Loading";
const AllRequestAndCreate = () => {
  let [showform, setShowform] = useState(false);
  let studentdata = useAppSelector(
    (store) => (store.Dashreducer as inidatainter).allStudentsdata
  );
  let allrequests = useAppSelector(
    (store) => (store.Dashreducer as inidatainter).allRequestofEachStudents
  );
  let loading = useAppSelector(
    (store) => (store.Dashreducer as inidatainter).loading
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
                <Option style={{display:e.status?"block":"none"}} value={e._id}>
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
           {
            !showform && allrequests.length===0&&<Image preview={false} src="https://media.istockphoto.com/id/1405760543/vector/question-and-answer-solving-problem-or-business-solution-ask-for-reply-or-idea-to-solve.jpg?s=612x612&w=0&k=20&c=2PgCTaLtGHheBM6SH5gMKRPVwQHmVWWW_bOX9NQbp6E="/>
           }
      {
      loading?<LoadingModal/>:!showform && (
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
