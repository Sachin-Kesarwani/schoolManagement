import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const ModalComp: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div onClick={showModal}>
        Submit
      </div>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        Are You Sure you want to submit
      </Modal>
    </>
  );
};

export default ModalComp;