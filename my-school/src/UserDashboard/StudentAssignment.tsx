import { Button, Image, Select, Spin, message } from "antd";
import React, { useState } from "react";
import { useAppSelector } from "../Redux/Store";
import { inidatainter } from "../Redux/Dashboard/reducer.dash";
import axios from "axios";
import AssignmentPagination from "./AssignmentPagination";
import SingleAssignmentDisplay from "./SingleAssignmentDisplay";
import Loader from "./Loader/Loader";

interface InputInter {
  student_class: string;
  studentid: string;
}

const { Option } = Select;

const StudentAssignment = () => {
  const [inputdata, setInputdata] = useState<InputInter>({
    student_class: "",
    studentid: "",
  });
  let [warn, setwarn] = useState(false);
  const [messageApi, contextHolder] = message.useMessage();
  let [page, setPage] = useState(1);
  let [maxassignment, setMaxAssignment] = useState(5);
  let [allassignments, setAllassignments] = useState([]);
  let [loading, setLoading] = useState(false);
  const options = Array.from({ length: 10 }, (_, index) => index + 1);
  let studentdata = useAppSelector(
    (store) => (store.Dashreducer as inidatainter).allStudentsdata
  );

  function handleChange(value: any, name: string) {
    setInputdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function getassignment(e: any) {
    e.preventDefault();

    if (inputdata.student_class !== "" && inputdata.studentid !== "") {
      setLoading(true);
      await axios
        .get(`http://localhost:8080/assignment/all`, {
          params: inputdata,
        })
        .then((res) => {
          if (res.request.status === 200) {
            setLoading(false);
            setAllassignments(res.data.allAssignments);
            messageApi.open({
              type: "success",
              content: res.data.msg,
            });
          }
        })
        .catch((err) => {
          console.log(err);
          if (err.request.status === 400) {
            messageApi.open({
              type: "error",
              content: err.response.data.msg,
            });
          } else if (err.request.status === 401) {
            messageApi.open({
              type: "error",
              content: err.response.data.msg,
            });
          } else if (err.request.status === 404) {
            messageApi.open({
              type: "error",
              content: err.response.data.msg,
            });
          }
        });
    } else {
      setwarn(true);
      setTimeout(() => {
        setwarn(false);
      }, 2000);
    }
  }

  function changeAssignmentLimit(value: string) {
    if (value === "") {
      setMaxAssignment(5);
    } else {
      setMaxAssignment(Number(value));
    }
  }
  return (
    <>
      <div className="assignmentInputmaindiv">
        {contextHolder}
        {/* Select for Child Name */}
        <Select
          className="selection"
          onChange={(value) => handleChange(value, "studentid")}
          value={inputdata.studentid}
          defaultValue="Select Your Child Name"
        >
          <Option value="">Select Your Child Name</Option>
          {studentdata &&
            studentdata.length > 0 &&
            studentdata.map((e) => (
              <Option key={e._id} value={e._id}>
                {e.name}
              </Option>
            ))}
        </Select>

        {/* Select for Class */}
        <Select
          className="selection"
          onChange={(value) => handleChange(value, "student_class")}
          value={inputdata.student_class}
          defaultValue="Select Class"
        >
          <Option value="">Select Your Child Class</Option>
          {options.map((option) => (
            <Option key={`class${option}`} value={`${option}`}>
              {`Class ${option}`}
            </Option>
          ))}
        </Select>

        {allassignments && allassignments.length > 0 && (
          <Select
            value={maxassignment}
            onChange={(value) => changeAssignmentLimit(value.toString())}
            className="selection"
          >
            <Option value={5}>Change Limit for Each Page</Option>
            <Option value={8}>8 Assignment Each Page</Option>
            <Option value={10}>10 Assignment Each Page</Option>
            <Option value={12}>12 Assignment Each Page</Option>
          </Select>
        )}

        <Button
          onClick={getassignment}
          style={{ backgroundColor: warn ? "red" : "blue", color: "white" }}
        >
          {warn ? (
            "Please Select both oprions"
          ) : loading ? (
            <Loader />
          ) : (
            "Get All Assignments"
          )}
        </Button>
      </div>
      {
      allassignments.length===0&&  <Image
          preview={false}
          style={{marginTop:"30px"}}
          src="https://www.shutterstock.com/image-illustration/assignment-concept-image-text-related-260nw-1310646509.jpg"
        />
      }
      {allassignments &&
        allassignments.length > 0 &&
        allassignments
          .filter(
            (e, i) =>
              i >= maxassignment * (page - 1) &&
              i < maxassignment * (page - 1) + maxassignment
          )
          .map((e) => {
            return <SingleAssignmentDisplay data={e} />;
          })}
      {allassignments && allassignments.length > 0 && (
        <AssignmentPagination
          page={page}
          setPage={setPage}
          data={allassignments}
          maxlimit={maxassignment}
        />
      )}
    </>
  );
};

export default StudentAssignment;
