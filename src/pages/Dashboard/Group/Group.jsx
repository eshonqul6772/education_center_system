import { useEffect, useState } from 'react'
import { Modal } from 'antd'
import { MdDelete, MdModeEdit } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'


import './Group.scss'
import GetGroupServices from '../../../services/group.service'
import Button from '../../../components/Button'
import AddGroup from './AddGroup'

function Group() {
  const navigate = useNavigate('')

  const [group, setGroup] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const showModal = () => {
    setIsModalOpen(true)
  }
  const handleOk = () => {
    setIsModalOpen(false)
  }
  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const hendelDelet = (id) => {
    GetGroupServices.remove(id)
      .then((res) => {
        setGroup(group.filter((element) => element.id !== id))
      })
      .catch((err) => {
        console.log(err)
      })
    handleCancel()
  }



  useEffect(() => {
    GetGroupServices.getAll()
      .then((res) => {
        setGroup(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  console.log(group)


  return (
    <>
      <div className='table__box'>
        <table className='table '>
          <thead className='' style={{ backgroundColor: '#003681', color: 'white' }}>
            <tr className='p-4 table__head'>
              <th style={{ textAlign: 'start' }}>group_name</th>
              <th></th>
              <th>subject_name</th>
              <th style={{ textAlign: 'end' }}>operation</th>
            </tr>
          </thead>
          <tbody>
            {group.map((element, i) => {
              return (
                <tr key={i}>
                  <td style={{ textAlign: 'start' }}>{element.name}</td>
                  <td></td>
                  <td>{element.subject.name}</td>
                  <td>
                    <div className='d-flex align-items-center justify-content-end gap-3'>
                      <button
                        onClick={() => navigate(`/group/${element.id}`)}
                        className='edit__btn'
                      >
                        <MdModeEdit />
                      </button>
                      <Button
                        onClick={showModal}
                        variant='danger'
                        title={<MdDelete size='25px' />}
                        className='delet__btn'
                      />
                    </div>
                  </td>

                  <Modal
                    footer={null}
                    title='You want to delete this user'
                    open={isModalOpen}
                    onOk={handleOk}
                    onCancel={handleCancel}
                  >
                    <div className='d-flex justify-content-end gap-4 mt-4'>
                      <Button title='cancel' variant='neutral' onClick={handleCancel} />
                      <Button
                        title='delete'
                        variant='danger-delete'
                        onClick={() => hendelDelet(element.id)}
                      />
                    </div>
                  </Modal>
                </tr>
              )
            })}
          </tbody>
        </table>

        <div>
          <AddGroup />
        </div>
      </div>
    </>
  )
}

export default Group
