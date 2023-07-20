import { Card } from "antd";
import Cookies from "js-cookie";
import React from "react";
import { useAppDispatch, useAppSelector } from "../Redux/Store";
import { inidatainter } from "../Redux/Dashboard/reducer.dash";
import SingleStudentTable from "./SingleStudentTable";
import "./style.css"
const StudentDetails = () => {
  let studentdata = useAppSelector(
    (store) => (store.Dashreducer as inidatainter).allStudentsdata
  );
  // let allRequests=useAppSelector((state) => (state.AdminReducer as inidataType).allRequest)//
  let Cookieuserdata =
    Cookies.get("SchooleManagementUserData") || "{name:Sachin}";
  let userdata = JSON.parse(Cookieuserdata);

  console.log(studentdata);
  return (
    <div>
      <h1 style={{ color: "black" }}>
        {" "}
        Hi 👋, {userdata.name.toUpperCase()}{" "}
        <span style={{ color: "blue" }}>
          Welcome To Your Student Dashboard Panel
        </span>
      </h1>
      <div className="parenDivOfEachStudentTable">
        {studentdata &&
          studentdata.length > 0 &&
          studentdata.map((e) => {
            return <SingleStudentTable data={e} />;
          })}
      </div>
    </div>
  );
};

export default StudentDetails;
