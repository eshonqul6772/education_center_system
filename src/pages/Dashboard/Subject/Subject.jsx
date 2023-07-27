import { useEffect, useState } from 'react'
import { Modal } from 'antd'
import { MdDelete, MdModeEdit } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'


import '../Group/Group.scss'
import getSubject from '../../../services/subject.service'
import Button from '../../../components/Button/Button'
import AddSubject from './AddSubject'

function Group() {
  const navigate = useNavigate('')

  const [subject, setSubject] = useState([])
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


  useEffect(() => {
    getSubject.getAll()
      .then((res) => {
        setSubject(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])


  const hendelDelet = (id) => {
    getSubject.remove(id)
      .then((res) => {
        setSubject(subject.filter((element) => element.id !== id))
      })
      .catch((err) => {
        console.log(err)
      })
    handleCancel()
  }


  return (
    <>
      <div className='table__box'>
        <table className='table '>
          <thead className='' style={{ backgroundColor: '#003681', color: 'white' }}>
            <tr className='p-4 table__head'>
              <th style={{ textAlign: 'start' }}>subject_name</th>
              <th></th>
              <th></th>
              <th style={{ textAlign: 'end' }}>operation</th>
            </tr>
          </thead>
          <tbody>
            {subject.map((element, i) => {
              return (
                <tr key={i}>
                  <td style={{ textAlign: 'start' }}>{element.name}</td>
                  <td></td>
                  <td></td>
                  <td>
                    <div className='d-flex align-items-center justify-content-end gap-3'>
                      <button
                        // onClick={() => navigate(`/group/${element.id}`)}
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
          <AddSubject/>
        </div>
      </div>
    </>
  )
}

export default Group
