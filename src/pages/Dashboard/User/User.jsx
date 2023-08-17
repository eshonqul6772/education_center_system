import { useState, useEffect } from 'react';
import {AiTwotoneEdit} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom';

import UserServices from "services/user.service"
import MeImg from 'assets/imgs/no-picture.jpg'
import './User.scss';


function User() {
const navigate = useNavigate()
   const [values, setValues] = useState('')

  useEffect(() => {
    UserServices.getUser()
      .then((result) => {
        setValues(result.data)
      }).catch((err) => {
        console.log(err)
      });
  }, [])



  return (
    <>
      <div className='table__box'>
        <h2 className='text-black mb-3'>Malumot</h2>
          <div className='d-flex gap-4 position-relative'>
            <button onClick={()=> navigate(`/user/${values.id}`)} className='btn__edit'><AiTwotoneEdit/></button>
              <div className=''>
                <img src={MeImg} alt={MeImg} style={{width:'200px', height:'200px'}}/>

                <h3>F.I: {values.firstName}. {values.lastName}</h3>
                <h3>tel_number:{values.phone}</h3>
              </div>
            <strong>role:ADMIN</strong>
          </div>
      </div>

    </>
  );
}

export default User;
