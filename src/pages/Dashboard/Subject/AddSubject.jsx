import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';


import AddSubject from '../../../services/subject.service'
import Button from '../../../components/Button'
import '../Group/Group.scss'

const AddUser = () => {



  const [values, setValues] = useState({
    subject: '',
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
      name: values.subject,
      status: 'ACTIVE'
    };

    console.log(data)

    AddSubject.addSubject(data)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });

      handleCancel()

  };



  return (
    <>
      <Button title='add_subject' onClick={showModal} variant='primary' />
      <Modal width={570} footer={null} title="add_subject" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>

        <form onSubmit={hendelSubmit} className='form-texnolgy'>
          <div>
            <div className='form__list'>
              <div>
                <div className='d-flex flex-column mb-3'>
                  <label className='form__category-lable' htmlFor=''>
                    subject_name
                  </label>
                  <input onChange={(e) => setValues({ ...values, subject: e.target.value })} type='text' placeholder='group name' />
                </div>
                <Button title='add' variant='primary' type='sumit' />
              </div>
            </div>
          </div>
        </form>

      </Modal>
    </>
  );
};

export default AddUser;


