import React, { useState, useEffect } from "react";
import { Modal, Select } from "antd";

import StudentService from "services/student.service";
import GetSubject from "services/subject.service";
import Button from "components/Button";
import "./AddStudent.scss";

const AddStudent = () => {
  const [subject, setSubject] = useState([]);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    username: "",
    password: "",
    subject: [],
  });
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

  const hendelSubmit = (evt) => {


    const data = {
      firstName: values.firstName,
      lastName: values.lastName,
      phone: values.phone,
      username: values.username,
      password: values.password,
      subjects_ids: values.subject,
      status: "ACTIVE",
    };

    StudentService.addStudent(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    handleCancel()
  };

  useEffect(() => {
    GetSubject.getAll().then((res) => {
      setSubject(res.data);
    });
  }, []);

  return (
    <>
      <Button title="add__student" onClick={showModal} variant="primary" />
      <Modal
        width={570}
        footer={null}
        title="add__student"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
       <form onSubmit={hendelSubmit} className="form-texnolgy">
          <div>
            <div className="form__list">
              <div>
                <div className="d-flex flex-column mb-3">
                  <label className="form__category-lable" htmlFor="">
                    first_name
                  </label>
                  <input className='form-control'
                    onChange={(e) =>
                      setValues({ ...values, firstName: e.target.value })
                    }
                    type="text"
                    placeholder="first_name"
                  />
                </div>

                <div className="d-flex flex-column mb-3">
                  <label className="form__category-lable" htmlFor="">
                    last_name
                  </label>
                  <input className='form-control'
                    onChange={(e) =>
                      setValues({ ...values, lastName: e.target.value })
                    }
                    type="text"
                    placeholder="last_name"
                  />
                </div>

                <div className="d-flex flex-column mb-3">
                  <label className="form__category-lable" htmlFor="">
                    phone
                  </label>
                  <input className='form-control'
                    onChange={(e) =>
                      setValues({ ...values, phone: e.target.value })
                    }
                    type="text"
                    placeholder="phone"
                  />
                </div>

                <div className="d-flex flex-column mb-3">
                  <label className="form__category-lable" htmlFor="">
                    username
                  </label>
                  <input className='form-control'
                    onChange={(e) =>
                      setValues({ ...values, username: e.target.value })
                    }
                    type="text"
                    placeholder="username"
                  />
                </div>

                <div className="d-flex flex-column mb-3">
                  <label className="form__category-lable" htmlFor="">
                    password
                  </label>
                  <input className='form-control'
                    onChange={(e) =>
                      setValues({ ...values, password: e.target.value })
                    }
                    type="text"
                    placeholder="password"
                  />
                </div>

                <div className="d-flex flex-column mb-3">
                  <label className="form__category-lable" htmlFor="">
                    teacher_subjects
                  </label>
                  <Select
                    onChange={(e) => setValues({ ...values, subject: e })}
                    mode="tags"
                    style={{
                      width: "100%",             
                    }}
                    placeholder="Tags Mode"
                    options={subject.map((item) => ({
                      value: item.id,
                      label: item.name,
                    }))}
                  />
                </div>
                <Button title="add_team" variant="primary" type="sumit" />
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </>
  );
};

export default AddStudent;
