import React from "react";
import { singleTeacherOrAdmin } from "../utils/data.types";
import { Avatar, Badge, Divider } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd/es/radio";

const SingleAdminTeacher = ({ data }: { data: singleTeacherOrAdmin }) => {
 
  return (
    <div
      key={data.email}
      style={{ height: "400px" }}
      className="teacherSingleDiv"
    >
      <Badge.Ribbon text={data.name} />
      <Avatar
        style={{ backgroundColor: "blue", color: "white", marginTop: "30px" }}
        icon={<UserOutlined />}
      />
      <p style={{ textAlign: "left", marginLeft: "8px" }}>
        <b>Email</b> : {data.email}
      </p>
      <p style={{ textAlign: "left", marginLeft: "8px" }}>
        <b>Role</b> : {data.position}
      </p>
      <p style={{ textAlign: "left", marginLeft: "8px" }}>
        <b>Monthly Salary</b> : ₹ {data.salary_permoth}
      </p>
      {
        data.preferred_subject&&  <p style={{ textAlign: "left", marginLeft: "8px" }}>
        <b>Subject</b> : {data.preferred_subject}
      </p>
      }
    
      <Divider plain>Salary Details</Divider>
      <div className="salaryDetails">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          borderBottom: "1px solid grey",
        }}
      >
        <p style={{ alignSelf: "flex-start" }}>JAN</p>

        <Badge
          style={{ width: "50px" }}
          overflowCount={99999999}
          count={"₹" + data.salary_permoth}
          showZero
          color={data.january ? "green" : "blue"}
        />
        <Button disabled={data.january}>{data.january ? "Paid" : "Pay"}</Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          borderBottom: "1px solid grey",
        }}
      >
        <p style={{ alignSelf: "flex-start" }}>FEB</p>

        <Badge
          style={{ width: "50px" }}
          overflowCount={99999999}
          count={"₹" + data.salary_permoth}
          showZero
          color={data.february? "green" : "blue"}
        />
        <Button disabled={data.february}>{data.february ? "Paid" : "Pay"}</Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          borderBottom: "1px solid grey",
        }}
      >
        <p style={{ alignSelf: "flex-start" }}>MAR</p>

        <Badge
          style={{ width: "50px" }}
          overflowCount={99999999}
          count={"₹" + data.salary_permoth}
          showZero
          color={data.march ? "green" : "blue"}
        />
        <Button disabled={data.march}>{data.march ? "Paid" : "Pay"}</Button>
      </div>
      

<div
  style={{
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottom: "1px solid grey",
  }}
>
  <p style={{ alignSelf: "flex-start" }}>APR</p>
  <Badge
    style={{ width: "50px" }}
    overflowCount={99999999}
    count={"₹" + data.salary_permoth}
    showZero
    color={data.april ? "green" : "blue"}
  />
  <Button disabled={data.april}>{data.april ? "Paid" : "Pay"}</Button>
</div>

<div
  style={{
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottom: "1px solid grey",
  }}
>
  <p style={{ alignSelf: "flex-start" }}>MAY</p>
  <Badge
    style={{ width: "50px" }}
    overflowCount={99999999}
    count={"₹" + data.salary_permoth}
    showZero
    color={data.may ? "green" : "blue"}
  />
  <Button disabled={data.may}>{data.may ? "Paid" : "Pay"}</Button>
</div>

<div
  style={{
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottom: "1px solid grey",
  }}
>
  <p style={{ alignSelf: "flex-start" }}>JUN</p>
  <Badge
    style={{ width: "50px" }}
    overflowCount={99999999}
    count={"₹" + data.salary_permoth}
    showZero
    color={data.june ? "green" : "blue"}
  />
  <Button disabled={data.june}>{data.june ? "Paid" : "Pay"}</Button>
</div>

<div
  style={{
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottom: "1px solid grey",
  }}
>
  <p style={{ alignSelf: "flex-start" }}>JUL</p>
  <Badge
    style={{ width: "50px" }}
    overflowCount={99999999}
    count={"₹" + data.salary_permoth}
    showZero
    color={data.july ? "green" : "blue"}
  />
  <Button disabled={data.july}>{data.july ? "Paid" : "Pay"}</Button>
</div>

<div
  style={{
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottom: "1px solid grey",
  }}
>
  <p style={{ alignSelf: "flex-start" }}>AUG</p>
  <Badge
    style={{ width: "50px" }}
    overflowCount={99999999}
    count={"₹" + data.salary_permoth}
    showZero
    color={data.august ? "green" : "blue"}
  />
  <Button disabled={data.august}>{data.august ? "Paid" : "Pay"}</Button>
</div>

<div
  style={{
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottom: "1px solid grey",
  }}
>
  <p style={{ alignSelf: "flex-start" }}>SEP</p>
  <Badge
    style={{ width: "50px" }}
    overflowCount={99999999}
    count={"₹" + data.salary_permoth}
    showZero
    color={data.september ? "green" : "blue"}
  />
  <Button disabled={data.september}>{data.september ? "Paid" : "Pay"}</Button>
</div>

<div
  style={{
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottom: "1px solid grey",
  }}
>
  <p style={{ alignSelf: "flex-start" }}>OCT</p>
  <Badge
    style={{ width: "50px" }}
    overflowCount={99999999}
    count={"₹" + data.salary_permoth}
    showZero
    color={data.october ? "green" : "blue"}
  />
  <Button disabled={data.october}>{data.october ? "Paid" : "Pay"}</Button>
</div>

<div
  style={{
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottom: "1px solid grey",
  }}
>
  <p style={{ alignSelf: "flex-start" }}>NOV</p>
  <Badge
    style={{ width: "50px" }}
    overflowCount={99999999}
    count={"₹" + data.salary_permoth}
    showZero
    color={data.november ? "green" : "blue"}
  />
  <Button disabled={data.november}>{data.november ? "Paid" : "Pay"}</Button>
</div>

<div
  style={{
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    borderBottom: "1px solid grey",
  }}
>
  <p style={{ alignSelf: "flex-start" }}>DEC</p>
  <Badge
    style={{ width: "50px" }}
    overflowCount={99999999}
    count={"₹" + data.salary_permoth}
    showZero
    color={data.december ? "green" : "blue"}
  />
  <Button disabled={data.december}>{data.december ? "Paid" : "Pay"}</Button>
</div>
      </div>
   
<Divider plain>OR </Divider>
<Button >Pay Full Salary </Button>
    </div>
  );
};

export default SingleAdminTeacher;
