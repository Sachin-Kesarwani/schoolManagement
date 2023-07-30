import { Avatar, Card, Image, Modal } from "antd";
import Cookies from "js-cookie";
import React,{useState,useEffect} from "react";
import NoOnestudying from "./NoOnestudying";
import { useAppDispatch, useAppSelector } from "../Redux/Store";
import { inidatainter } from "../Redux/Dashboard/reducer.dash";
import SingleStudentTable from "./SingleStudentTable";
import "./style.css"
import {Collapse} from "antd"
import { handleScrollToTop } from "../Important/scrollup";
import LoadingModal from "../Admin/Loading";

const { Panel } = Collapse;

const StudentDetails = () => {
  let studentdata = useAppSelector(
    (store) => (store.Dashreducer as inidatainter).allStudentsdata
  );
let loading= useAppSelector(
  (store) => (store.Dashreducer as inidatainter).loading
);


  // let allRequests=useAppSelector((state) => (state.AdminReducer as inidataType).allRequest)//
  let Cookieuserdata =
    Cookies.get("SchooleManagementUserData") || "{name:Sachin}";
  let userdata = JSON.parse(Cookieuserdata);

  console.log(studentdata);
  const [previewImage, setPreviewImage] = useState(null);

  const handlePreview = (url:any) => {
    setPreviewImage(url);
  };

  const handleClosePreview = () => {
    setPreviewImage(null);
  };
  useEffect(()=>{
   handleScrollToTop()
  },[])
  return loading?<LoadingModal/>: studentdata && studentdata.length===0?<NoOnestudying/>: (
    <div>
      <h1 style={{ color: "black" }}>
        {" "}
        Hi 👋, {userdata.name.toUpperCase()}{" "}
        <span style={{ color: "blue" }}>
          Welcome To Your Student Dashboard Panel
        </span>
      </h1>
      {/* <div className="parenDivOfEachStudentTable"> */}
      <Collapse  bordered={true}>
      {studentdata && 
          studentdata.length > 0 &&
          studentdata.map((e) => {
            return   <Panel style={{overflow:"scroll"}}  header={<div style={{ display: 'flex', alignItems: 'center' }}><Avatar    onClick={() => handlePreview(e.student_image)}
            style={{ cursor: 'pointer' }} src={e.student_image}/> <h3 style={{color:"black"}}>{e.name}</h3></div>} key={e._id}>
       <SingleStudentTable data={e} />;
          </Panel> 
          })}
      </Collapse>
      <Modal visible={!!previewImage} onCancel={handleClosePreview} footer={null}>
        {previewImage && <img alt="Preview" src={previewImage} style={{ width: "100%" }} />}
      </Modal>
   
    </div>
  );
};

export default StudentDetails;
