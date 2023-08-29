import React, { useState } from "react";
import { Modal } from "antd";

import AddSubjectServisece from "services/subject.service";
import Button from "components/Button";
import "../Group/Group.scss";

const AddSubject = () => {
  const [values, setValues] = useState({
    subject: "",
  });

  const [selected, setSelected] = useState(null);

  const hendelSubmit = (evt) => {

    const data = {
      name: values.subject,
      status: "ACTIVE",
    };

    AddSubjectServisece.addSubject(data)
      .then((res) => {
        console.log(res);
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
        open={selected}
        onCancel={() => setSelected(false)}
      >
        <form onSubmit={hendelSubmit} className="form-texnolgy">
          <div>
            <div className="form__list">
              <div>
                <div className="d-flex flex-column mb-3">
                  <label className="form__category-lable" htmlFor="">
                    subject_name
                  </label>
                  <input
                    className="form-control"
                    onChange={(e) =>
                      setValues({ ...values, subject: e.target.value })
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
