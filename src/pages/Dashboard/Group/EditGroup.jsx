import React, { useState , useEffect} from 'react';
import { MdModeEdit } from "react-icons/md";
import { Modal, Select } from 'antd';

import getSubject from "../../../services/group.service.js"
import EditGroupServisec from "../../../services/group.service"
import Button from "../../../components/Button"

const { Option, OptGroup } = Select;

const EditGroup = () => {


  const [subject, setSubject] = useState([])
  const [values, setValues] = useState({
    name: '',
    subjectValue: '',
    status: ''
  });


  function handleChange(value) {
    console.log(`selected ${value}`);
  }

  
   
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
        evt.preventDefault();

        const data = {
            name: values.name,
            subject_id: values.subjectValue,
            status: values.status
          };

          EditGroupServisec.ubdate(data)
            .then((res) => {
                alert('add category');
                console.log(res)
            })
            .catch((err) => {
                console.log(err);
            });

    };

    useEffect(() => {
        getSubject.getSubject().then((res) => {
          setSubject(res.data)
        })
      }, [])

    return (
        <>
            <button onClick={showModal} className='edit__btn'>
                <MdModeEdit />
            </button>
          
      <Modal width={570} footer={null} title="add_group" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

        <form onSubmit={hendelSubmit} className='form-texnolgy'>
          <div>
            <div className='form__list'>
              <div>
                <div className='d-flex flex-column mb-3'>
                  <label className='form__category-lable' htmlFor=''>
                    group_name
                  </label>
                  <input onChange={(e) => setValues({ ...values, name: e.target.value })} type='text' placeholder='group name' />
                </div>

                <div className='d-flex flex-column mb-3'>
                  <label className='form__category-lable' htmlFor=''>
                    subject
                  </label>
                  <Select onSelect={(e) => setValues({ ...values, setSubject: e })}

                    style={{
                      width: 515,
                    }}
                    options={subject.map(item => ({
                      value: item.id,
                      label: item.name
                    }))}
                  />

                  <Select  className='mt-4'
                  onSelect={(e) => setValues({ ...values, status:e })}
                    defaultValue="ACTIVE"
                    style={{ width: 515 }}
                    onChange={handleChange}
                  >
                    <OptGroup label="status">
                      <Option value="ACTIVE">ACTIVE</Option>
                      <Option value="NOACTIVE">NO_ACTIVE</Option>
                    </OptGroup>
                  </Select>
                </div>

                <Button onClick={hendelSubmit} title='add' variant='primary' type='sumit' />
              </div>
            </div>
          </div>
        </form>

      </Modal>
        </>
    );
};


export default EditGroup;


