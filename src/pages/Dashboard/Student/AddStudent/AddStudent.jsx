import React, { useState } from "react";
import { Modal } from "antd";

import Button from "components/Button";
import "./AddStudent.scss";

const AddStudent = () => {
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
      {" "}
      <Button title="add__student" onClick={showModal} variant="primary" />
      <Modal
        width={570}
        footer={null}
        title="add__student"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form className="form-texnolgy">
          <div className="form__list">
            <div>
              <div className="d-flex flex-column mb-3">
                <label className="form__category-lable" htmlFor="">
                  firstName
                </label>
                <input type="text" placeholder="firstname" />
              </div>

              <div className="d-flex flex-column mb-3">
                <label className="form__category-lable" htmlFor="">
                  LastName
                </label>
                <input type="text" placeholder="lastname" />
              </div>
            </div>

            <div>
              <div className="d-flex flex-column mb-3">
                <label className="form__category-lable" htmlFor="">
                  ter_number
                </label>
                <input type="text" placeholder="tel number" />
              </div>

              <div className="d-flex flex-column mb-3">
                <label className="form__category-lable" htmlFor="">
                  subject
                </label>
                <input type="text" placeholder="subject" />
              </div>

              <button type="button" className="addBtn">
                add
              </button>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddStudent;
