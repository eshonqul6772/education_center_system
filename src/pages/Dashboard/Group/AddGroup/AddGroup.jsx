import React, { useEffect, useState } from 'react';
import { Modal } from 'antd';


import AddUserService from "../../../../services/group.service"
import Button from "../../../../components/Button"
import "./AddGroup.scss"

const AddUser = () => {
  const [values, setValues] = useState({
    category: '',
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
    evt.preventDefault();

    const data = {
      group: values.group,
     
    };

    AddUserService.getAll(data)
      .then((res) => {
        alert('add category');
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
   
  };

  return (
    <>
    <Button title='add__user' onClick={showModal} variant='primary'/>
      <Modal width={570} footer={null} title="add__user" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>



        <form onSubmit={hendelSubmit} className='form-texnolgy'>
          <div>


            <div className='form__list'>
              <div>
                <div className='d-flex flex-column mb-3'>
                  <label className='form__category-lable' htmlFor=''>
                    group_name
                  </label>
                  <input   onChange={(e) => setValues({ ...values, category: e.target.value })} type='text' placeholder='group name' />
                </div>

                <Button title='add' variant='primary'/>
              </div>

            </div>
          </div>
        </form>


      </Modal>
    </>
  );
};

export default AddUser;


