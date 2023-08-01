import React, { useEffect, useState } from 'react'
import { Modal, Select } from 'antd'
import getSubject from '../../../../services/group.service.js'
import AddGroup from '../../../../services/group.service'
import Button from '../../../../components/Button'
import './AddGroup.scss'

const options = []

const handleChange = (value) => {
  console.log(`selected ${value}`)
}
const AddUser = () => {
  const [subject, setSubject] = useState([])
  const [values, setValues] = useState({
    name: '',
    subjectValue: '',
    status: '',
  })

  function handleChange(value) {
    console.log(`selected ${value}`)
  }

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

  const hendelSubmit = (evt) => {
    const data = {
      name: values.name,
      subject_id: values.subjectValue,
      status: values.status,
    }

    AddGroup.addUser(data)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })

    handleCancel()
  }

  useEffect(() => {
    getSubject.getSubject().then((res) => {
      setSubject(res.data)
    })
  }, [])

  return (
    <>
      <Button title='add__group' onClick={showModal} variant='primary' />
      <Modal
        width={570}
        footer={null}
        title='add_group'
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <form onSubmit={hendelSubmit} className='form-texnolgy'>
          <div>
            <div className='form__list'>
              <div>
                <div className='d-flex flex-column mb-3'>
                  <label className='form__category-lable' htmlFor=''>
                    group_name
                  </label>
                  <input
                    onChange={(e) => setValues({ ...values, name: e.target.value })}
                    type='text'
                    placeholder='group name'
                  />
                </div>

                <div className='d-flex flex-column mb-3'>
                  <label className='form__category-lable' htmlFor=''>
                    subject
                  </label>
                  <Select
                    onSelect={(e) => setValues({ ...values, subjectValue: e })}
                    style={{
                      width: 515,
                    }}
                    options={subject.map((item) => ({
                      value: item.id,
                      label: item.name,
                    }))}
                  />
                </div>

                <div className='d-flex flex-column mb-3'>
                  <label className='form__category-lable' htmlFor=''>
                    team
                  </label>
                  <Select
                    mode='tags'
                    style={{
                      width: '100%',
                    }}
                    placeholder='Tags Mode'
                    onChange={handleChange}
                    options={options}
                  />
                </div>

                <Button onClick={hendelSubmit} title='add' variant='primary' type='sumit' />
              </div>
            </div>
          </div>
        </form>
      </Modal>
    </>
  )
}

export default AddUser
