import { useState, useEffect } from 'react';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { Modal, Table } from 'antd';

import UserServices from "services/user.service"
import Columns from "./DataHeader.js"
import Button from 'components/Button';
import AddUser from "components/AddUser"
import './User.scss';

function User() {

  const [valus, setValus] = useState([[]])

  useEffect(() => {
    UserServices.getUser()
      .then((result) => {
        setValus(result.data)

      }).catch((err) => {
        console.log(err)
      });
  }, [])



  console.log(valus)

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
      <div className='table__box'>
        <Table columns={Columns} dataSource={[
          {
            key: valus.id,
            firstName: valus.firstName,
            lastName: valus.lastName,
            phone: valus.phone,
            username: valus.username,
            operation: <>
              <div className='d-flex align-items-center justify-content-end gap-3'>
                <button className='edit__btn'>
                  <MdModeEdit />
                </button>

                <Button variant="danger" title={<MdDelete size='25px' />} onClick={showModal} className='delet__btn' />

              </div>
            </>
          },
        ]} />
        <AddUser />
      </div>

      <Modal footer={null} title="You want to delete this user" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div className='d-flex justify-content-end gap-4 mt-4'>
          <Button title='cancel' variant='neutral' onClick={handleCancel} />
          <Button title='delete' variant='danger-delete' />
        </div>
      </Modal>
    </>
  );
}

export default User;
