import { useState } from 'react';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import {  Modal } from 'antd';


import Button from '../../../components/Button';
import AddUser  from "../../../components/AddUser"
import './User.scss';

function User() {

    const arr = [1,2,3,4,5,6,7,8,9]

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
        <div className='table-responsive '>
          <table className='table '>
            <thead className='' style={{ backgroundColor: '#003681', color: 'white' }}>
              <tr className='p-4 table__head'>
                <th style={{ textAlign: 'start' }}>firstName</th>
                <th>firstName</th>
                <th>tel</th>
              
                <th style={{ textAlign: 'end' }}>operation</th>
              </tr>
            </thead>

            <tbody>
            {
                arr.map((e, i)=>{
                    return(
                        <tr key={i}>
                            <td style={{ textAlign: 'start' }}>Sunnat</td>
                            <td>Alijonov</td>
                            <td>+998 971674748</td>
                         
                            <td>
                                <div className='d-flex align-items-center justify-content-end gap-3'>
                                    <button className='edit__btn'>
                                        <MdModeEdit />
                                    </button>

                                    <Button variant="danger" title={  <MdDelete size='25px' />}  onClick={showModal}  className='delet__btn'/>

                                </div>
                            </td>
                        </tr>
                    )
                })
            }
            </tbody>
          </table>
        </div>
    <AddUser/>
      </div>

      <Modal footer={null} title="You want to delete this user" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <div className='d-flex justify-content-end gap-4 mt-4'>
           <Button title='cancel' variant='neutral' onClick={handleCancel}/>
            <Button title='delete' variant='danger-delete' />
         </div>
      </Modal>
    </>
  );
}

export default User;
