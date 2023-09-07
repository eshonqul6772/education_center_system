import React, { useState } from "react";
import { Modal } from "antd";

import AddSubjectService from "services/subject.service";

import Button from "components/Button";
import Input from 'components/Input';

import "../Group/Group.scss";

const AddSubject = ({ getList }) => {
  const [values, setValues] = useState({
    subject: "",
  });

  const [selected, setSelected] = useState(null);

  const handleSubmit = (evt) => {

    evt.preventDefault()

    const data = {
      name: values.subject,
      status: "ACTIVE",
    };

    AddSubjectService.addSubject(data)
      .then((res) => {
        console.log(res);
        getList();
      })
      .catch((err) => {
        console.log(err);
      });

    setSelected(null);
  };

  return (
    <>
      <Button title="add_subject" onClick={setSelected} variant="primary" />

      <Modal
        width={570}
        footer={null}
        title="add_subject"
        open={!!selected}
        onCancel={() => setSelected(false)}
      >
        <form onSubmit={handleSubmit} className="form-texnolgy">
          <div>
            <div className="form__list">
              <div>
                <div className="d-flex flex-column mb-3">
                  <label className="form__category-lable">
                    subject_name
                  </label>
                  <Input
                    className="form-control"
                    onChange={(e) =>
                      setValues({ ...values, subject: e.target.value})
                    }
                    type="text"
                    placeholder="subject name"
                  />
                </div>
                <Button title="add" variant="primary" type="sumit" />
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddSubject;
