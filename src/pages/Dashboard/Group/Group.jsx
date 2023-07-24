import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import {  Modal } from 'antd';


import AddGroup from "./AddGroup"
import Button from '../../../components/Button';
import './Group.scss';
import EditGroup from "./EditGroup";

function Group() {
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
          <table className='table '>
            <thead className='' style={{ backgroundColor: '#003681', color: 'white' }}>
            <tr className='p-4 table__head'>
                <th style={{ textAlign: 'start' }}>Group_name</th>
                
                <th style={{ textAlign: 'end' }}>operation</th>
              </tr>
            </thead>
            <tbody>
            <tr>
                    <td style={{ textAlign: 'start' }}>MTH002</td>
                    <td>
                      <div className='d-flex align-items-center justify-content-end gap-3'>
                          <EditGroup/>
                        <Button variant="danger" title={  <MdDelete size='25px' />}  onClick={showModal}  className='delet__btn'/>
                      </div>
                    </td>
                  </tr>
            </tbody>
          </table>

          <div>
            <AddGroup />
          </div>

          <Modal footer={null} title="You want to delete this user" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
      <div className='d-flex justify-content-end gap-4 mt-4'>
           <Button title='cancel' variant='neutral' onClick={handleCancel}/>
            <Button title='delete' variant='danger-delete' />
         </div>
      </Modal>
        </div>
   
    </>
  );
}



export default Group;
