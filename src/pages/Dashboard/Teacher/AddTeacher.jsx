import React, { useState, useEffect } from "react";
import { Select, Modal } from "antd";

import AddTeacher from "services/teacher.service";
import getSubject from "services/subject.service.js";
import Button from "components/Button";
import "../Group/Group.scss";

const EditTeacher = () => {
  const [subject, setSubject] = useState([]);
  const [selected, setSelected] = useState(null);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    username: "",
    password: "",
    subject: [],
  });

  





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
  

    AddTeacher.AddData(data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      setSelected(null)
  };

  useEffect(() => {
    getSubject.getAll().then((res) => {
      setSubject(res.data);
    });
  }, []);

  
  return (
    <>
      <Button title="add_team" onClick={setSelected} variant="primary" />
      <Modal
        width={570}
        footer={null}
        title="add_team"
        open={selected}
        onCancel={() => setSelected(false)}
      >
        <form onSubmit={hendelSubmit} className="form-texnolgy">
          <div>
            <div className="form__list">
              <div>
                <div className="d-flex flex-column mb-3">
                  <label className="form__category-lable" htmlFor="">
                    first_name
                  </label>
                  <input
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
                  <input
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
                  <input
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
                  <input
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
                  <input
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
                    onChange={(e) => setValues({ ...values, subjects: e })}
                   
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
export default EditTeacher;
