import React, { useState } from "react";
import { Button, Modal, Space, Spin } from "antd";

const LoadingModal = () => {


  return (
    <>
      
      <Modal centered open footer={null} closable={false}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <Spin size="large" />
        </div>

        <h1 style={{ color: "black", textAlign: "center" }}>Loading...</h1>
      </Modal>
    </>
  );
};

export default LoadingModal;
