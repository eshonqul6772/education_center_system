import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'



import getSubjectId from "../../../services/subject.service.js"
import Button from '../../../components/Button'


const EditSubject = () => {
  const navigate = useNavigate('')
  const { id } = useParams()
  const [subject, setSubject] = useState([])

  const [values, setValues] = useState({
    name: '',
    status: "ACTIVE"
  })



  useEffect(() => {
    getSubjectId.getUserid(id).then((res) => {
      const { name, status } = res.data;
      const findSubject = {
        name,
        status
      }
      setValues(findSubject)
    })
      .catch((err) => console.log(err))

   
  }, [id]);




  const handleSubmit = async (e) => {
    e.preventDefault();
    getSubjectId.ubdate().then((e) => {
      console.log()
    }).catch((e) => {
      console.log(e)
    })
  
    navigate('/subject')
  }


  return (
    <>
      <form onSubmit={handleSubmit} className='form-texnolgy'>
        <div>
          <div className='form__list'>
            <div>
              <div className='d-flex flex-column mb-3'>
                <label className='form__category-lable' htmlFor=''>
                  subject_name
                </label>
                <input
                  onChange={(e) => setValues({ ...values, name: e.target.value })}
                  type='text'
                  placeholder='subject name'
                  defaultValue={values.name}
                />
              </div>

              <Button title='edit_subject' variant='primary' type='sumit' />
            </div>
          </div>
        </div>
      </form>
    </>
  )
}

export default EditSubject;
