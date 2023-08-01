import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { Select } from 'antd'

import authHeader from '../../../services/auth-header.js'
import getSubject from '../../../services/group.service.js'
import Button from '../../../components/Button'

const { Option, OptGroup } = Select

const EditGroup = () => {
  const navigate = useNavigate('')
  const { id } = useParams()
  const [subject, setSubject] = useState([])

  const [values, setValues] = useState({
    name: '',
    subjectValue: '',
    status: '',
  })

  const fetchGroup = () => {
    axios
      .get(`http://localhost:8080/api/v1/groups/${id}`, {
        headers: { 
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        }})
      .then((res) => {
        console.log(res)
        const { name, subjectValue, status } = res.data
        const findUser = {
          name,
          subjectValue,
          status,
        }
        setValues(findUser)
      })
      .catch((error) => {
        console.log(error)
      })
  }

  console.log(values)


  useEffect(() => {
    fetchGroup()
  }, []);

  function handleChange(value) {
    console.log(`selected ${value}`)
  }


  

  const handleSubmit = async (e) => {
    e.preventDefault();

   axios.put('http://localhost:8080/api/v1/groups/' + id,  {
    headers: { 
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    }} )
       .then((e) => {
            console.log(e.data)
        }).catch((e) => {
          console.log(e)
        })
  };

  useEffect(() => {
    getSubject.getSubject().then((res) => {
      setSubject(res.data)
    })
  }, [])

  return (
    <>
      <form onSubmit={handleSubmit} className='form-texnolgy'>
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
                  defaultValue={values.name}
                />
              </div>

              <div className='d-flex flex-column mb-3'>
                <label className='form__category-lable' htmlFor=''>
                  subject
                </label>
                <Select
                  onSelect={(e) => setValues({ ...values, setSubject: e })}
                  style={{
                    width: 515,
                  }}
                  defaultValue={subject.name}
                  options={subject.map((item) => ({
                    value: item.id,
                    label: item.name,
                  }))}
                />

                <Select
                  className='mt-4'
                  onSelect={(e) => setValues({ ...values, status: e })}
                  defaultValue='ACTIVE'
                  style={{ width: 515 }}
                  onChange={handleChange}
                >
                  <OptGroup label='status'>
                    <Option value='ACTIVE'>ACTIVE</Option>
                    <Option value='NOACTIVE'>NO_ACTIVE</Option>
                  </OptGroup>
                </Select>
              </div>

              <Button   title='edit' variant='primary' type='sumit' />
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default EditGroup
