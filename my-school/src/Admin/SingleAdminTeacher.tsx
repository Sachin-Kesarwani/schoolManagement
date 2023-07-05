import React ,{useEffect,useState}from "react";
import { singleTeacherOrAdmin } from "../utils/data.types";
import { Avatar, Badge, Divider } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd/es/radio";
import Payment from "./Payment";

const SingleAdminTeacher = ({ data }: { data: singleTeacherOrAdmin }) => {
  console.log(data)
let [totalSalary,settotalSalary]=useState<Number>(0)
  function  totalunpaidsalary(){
    let count=0
  if(!data.january){
    count+=data.salary_permoth
  }
  
  if(!data.february){
    count+=data.salary_permoth
  }
    if(!data.march){
    count+=data.salary_permoth
  }
    if(!data.april){
    count+=data.salary_permoth
  }
    if(!data.may){
    count+=data.salary_permoth
  }
   if(!data.june){
    count+=data.salary_permoth
  } 
  if(!data.july){
    count+=data.salary_permoth
  }
   if(!data.august){
    count+=data.salary_permoth
  }
    if(!data.september){
    count+=data.salary_permoth
  }
  if(!data.october){
    count+=data.salary_permoth
  }
   if(!data.november){
    count+=data.salary_permoth
  }
   if(!data.december){
    count+=data.salary_permoth
  }

   settotalSalary(count)
  }
  useEffect(()=>{
    totalunpaidsalary()
  },[])

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
        <b>Email</b> : {`${data.email.substring(0, 15)}...`}
      </p>
      <p style={{ textAlign: "left", marginLeft: "8px" }}>
        <b>Role</b> : {data.position}
      </p>
      <p style={{ textAlign: "left", marginLeft: "8px" }}>
        <b>Monthly Salary</b> : ₹ {data.salary_permoth}
      </p>
      {data.preferred_subject && (
        <p style={{ textAlign: "left", marginLeft: "8px" }}>
          <b>Subject</b> : {data.preferred_subject}
        </p>
      )}

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
          <Payment
            idofAdmin={data._id}
            month={"january"}
            name={data.name}
            email={data.email}
            salaryStatus={data.january}
            salary_amount={data.salary_permoth}
          />
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
            color={data.february ? "green" : "blue"}
          />
          <Payment
            idofAdmin={data._id}
            month={"february"}
            name={data.name}
            email={data.email}
            salaryStatus={data.february}
            salary_amount={data.salary_permoth}
          />
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
          <Payment
            idofAdmin={data._id}
            month={"march"}
            name={data.name}
            email={data.email}
            salaryStatus={data.march}
            salary_amount={data.salary_permoth}
          />
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
          <Payment
            idofAdmin={data._id}
            month={"april"}
            name={data.name}
            email={data.email}
            salaryStatus={data.april}
            salary_amount={data.salary_permoth}
          />
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
          <Payment
            idofAdmin={data._id}
            month={"may"}
            name={data.name}
            email={data.email}
            salaryStatus={data.may}
            salary_amount={data.salary_permoth}
          />
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
          <Payment
            idofAdmin={data._id}
            month={"june"}
            name={data.name}
            email={data.email}
            salaryStatus={data.june}
            salary_amount={data.salary_permoth}
          />
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
          <Payment
            idofAdmin={data._id}
            month={"july"}
            name={data.name}
            email={data.email}
            salaryStatus={data.july}
            salary_amount={data.salary_permoth}
          />
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
          <Payment
            idofAdmin={data._id}
            month={"august"}
            name={data.name}
            email={data.email}
            salaryStatus={data.august}
            salary_amount={data.salary_permoth}
          />
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
          <Payment
            idofAdmin={data._id}
            month={"september"}
            name={data.name}
            email={data.email}
            salaryStatus={data.september}
            salary_amount={data.salary_permoth}
          />
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
          <Payment
            idofAdmin={data._id}
            month={"october"}
            name={data.name}
            email={data.email}
            salaryStatus={data.october}
            salary_amount={data.salary_permoth}
          />
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
          <Payment
            idofAdmin={data._id}
            month={"november"}
            name={data.name}
            email={data.email}
            salaryStatus={data.november}
            salary_amount={data.salary_permoth}
          />
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
          <Payment
            idofAdmin={data._id}
            month={"december"}
            name={data.name}
            email={data.email}
            salaryStatus={data.december}
            salary_amount={data.salary_permoth}
          />
        </div>
      </div>

      <Divider plain>OR </Divider>
      <Payment
        idofAdmin={data._id}
        month={"all"}
        name={data.name}
        email={data.email}
        salaryStatus={
              !data.january
            ? false
            : !data.february
            ? false
            : !data.march
            ? false
            : !data.april
            ? false
            : !data.may
            ? false
            : !data.june
            ? false
            : !data.july
            ? false
            : !data.august
            ? false
            : !data.september
            ? false
            : !data.october
            ? false
            : !data.november
            ? false
            : !data.december
            ? false
            : true
        }
        salary_amount={totalSalary}
      />
    </div>
  );
};

export default SingleAdminTeacher;
