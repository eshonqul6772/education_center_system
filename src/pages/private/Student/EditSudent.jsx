import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {HiOutlineRefresh} from 'react-icons/hi';
import {useNavigate} from 'react-router-dom';
import { Select } from "antd";
import toast, {Toaster} from 'react-hot-toast';

import getStudent from "services/student.service";
import getSubject from "services/subject.service.js";
import Button from "components/Button";
import "../Group/Group.scss";


const EditStudent = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [subjects, setSubject] = useState([]);

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    username: "",
    password: "",
    status: "ACTIVE",
  });
  

  const hendelSubmit = (evt) => {
    toast.success('success update data')
    evt.preventDefault();

    setTimeout(()=>{
      getStudent
          .update(id, values)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
    },2000)
  };

  useEffect(() => {
    getStudent
      .getStudent(id)
      .then((res) => {
        const {
          firstName,
          lastName,
          phone,
          username,
          password,
          status,
        } = res.data;
        setValues({
          firstName,
          lastName,
          phone,
          username,
          password,
          status,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  },[id])

  console.log(values)


  useEffect(() => {
    getSubject.getAll().then((res) => {
      setSubject(res.data);
    });
  }, []);

  console.log(subjects)

  return (
    <>
     <div className='table__box'>
       <form onSubmit={hendelSubmit} className=" w-100">
         <div className="d-flex flex-wrap justify-content-around w-100 align-items-center">
           <div className="w-25">
             <div className="d-flex flex-column mb-3">
               <label className="form__category-lable" htmlFor="">
                 first_name
               </label>
               <input defaultValue={values.firstName}
                      className="form-control"
                      onChange={(e) =>
                          setValues({ ...values, firstName: e.target.value })
                      }
                      type="text"
                      placeholder="first_name"
               />
             </div>

             <div className="d-flex flex-column mb-3">
               <label className="form__category-lable" htmlFor="">
                 last_name
               </label>
               <input defaultValue={values.lastName}
                      className="form-control"
                      onChange={(e) =>
                          setValues({ ...values, lastName: e.target.value })
                      }
                      type="text"
                      placeholder="last_name"
               />
             </div>
           </div>

           <div className="w-25">
             <div className="d-flex flex-column mb-3">
               <label className="form__category-lable" htmlFor="">
                 phone
               </label>
               <input defaultValue={values.phone}
                      className="form-control"
                      onChange={(e) =>
                          setValues({ ...values, phone: e.target.value })
                      }
                      type="text"
                      placeholder="phone"
               />
             </div>

             <div className="d-flex flex-column mb-3">
               <label className="form__category-lable" htmlFor="">
                 username
               </label>
               <input defaultValue={values.username}
                      className="form-control"
                      onChange={(e) =>
                          setValues({ ...values, username: e.target.value })
                      }
                      type="text"
                      placeholder="username"
               />
             </div>
           </div>

           <div className="w-25">
             <div className="d-flex flex-column mb-3">
               <label className="form__category-lable" htmlFor="">
                 password
               </label>
               <input defaultValue={values.password}
                      className="form-control"
                      onChange={(e) =>
                          setValues({ ...values, password: e.target.value })
                      }
                      type="text"
                      placeholder="password"
               />
             </div>

             <div className="d-flex flex-column mb-3">
               <label className="form__category-lable" htmlFor="">
                 teacher_subjects
               </label>
               <Select
                   onChange={(e) => setValues({ ...values, subjects_ids: e })}
                   mode="tags"
                   style={{
                     width: "100%",
                   }}
                   placeholder="Tags Mode"
                   options={subjects.map((item) => ({
                     value: item.id,
                     label: item.name,
                   }))}
               />
             </div>
           </div>
         </div>
         <div className="d-flex justify-content-end me-4 mt-4">


             <div className='d-flex justify-content-end gap-3'>
               <Button title="save_edit" variant="success" type="sumit"/>
               <Button onClick={()=> navigate('/subject')} title={<HiOutlineRefresh fontSize='20px'/>} variant='secondary' type='button'/>
             </div>

         </div>
       </form>
     </div>
    </>
  );
};
export default EditStudent;
