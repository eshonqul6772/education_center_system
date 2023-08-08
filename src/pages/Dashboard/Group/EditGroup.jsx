import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Select } from "antd";

import GetGroup from "services/group.service.js";
import getSubject from "services/subject.service";
import Button from "components/Button";

const { Option, OptGroup } = Select;

const EditGroup = () => {
  const { id } = useParams();
  const navigate = useNavigate("");
  const [subject, setSubject] = useState([]);

  const [values, setValues] = useState({
    name: "",
    subject_id: "",
    status: "",
    subjectValue: "",
  });

  useEffect(() => {
    GetGroup.getGroup(id)
      .then((res) => {
        console.log(res.data);
        const { name, subject, status } = res.data;
        setValues({
          name,
          subject_id: subject.id,
          subjectValue: subject.name,
          status,
        });
      })
      .catch((err) => console.log(err));
  }, [id]);

  console.log(values.subjectValue);

  const handleSubmit = async (e) => {
    e.preventDefault();

    GetGroup.ubdate(id, values)
      .then((res) => {
        navigate("/groups");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSubject.getAll().then((respons) => {
      setSubject(respons.data);
    });
  }, []);



  
  return (
    <>
      <form onSubmit={handleSubmit} className="form-texnolgy">
        <div>
          <div className="form__list">
            <div>
              <div className="d-flex flex-column mb-3">
                <label className="form__category-lable" htmlFor="">
                  group_name
                </label>
                <input
                  onChange={(e) =>
                    setValues({ ...values, name: e.target.value })
                  }
                  type="text"
                  placeholder="group name"
                  defaultValue={values.name}
                />
              </div>

              <div className="d-flex flex-column mb-3">
                <label className="form__category-lable" htmlFor="">
                  subject
                </label>
                <Select
                  onSelect={(e) => setValues({ ...values, subject_id: e })}
                  style={{
                    width: 515,
                  }}
                  defaultValue={values.subjectValue}
                  options={subject.map((item) => ({
                    value: item.id,
                    label: item.name,
                  }))}
                />

                <Select
                  className="mt-4"
                  onSelect={(e) => setValues({ ...values, status: e })}
                  defaultValue="ACTIVE"
                  style={{ width: 515 }}
                >
                  <OptGroup label="status">
                    <Option value="ACTIVE">ACTIVE</Option>
                    <Option value="NOACTIVE">NO_ACTIVE</Option>
                  </OptGroup>
                </Select>
              </div>

              <Button title="edit" variant="primary" type="sumit" />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default EditGroup;
