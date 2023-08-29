import { useState, useEffect } from 'react';
import {AiTwotoneEdit} from 'react-icons/ai'
import {useNavigate} from 'react-router-dom';

import useAuth from 'reducers/hooks';

import MeImg from 'assets/imgs/no-picture.jpg';
import './User.scss';


function User() {
const navigate = useNavigate()

   const {firstName, lastName, phone, role, id}  = useAuth()
   const [values, setValues] = useState('')


    console.log(id)

  return (
    <>
      <div className='table__box'>
        <h2 className='text-black mb-3'>Malumot</h2>
          <div className='d-flex gap-4 position-relative'>
            <button onClick={()=> navigate(`/user/${id}`)} className='btn__edit'><AiTwotoneEdit/></button>
              <div className=''>
                <img src={MeImg} alt={MeImg} style={{width:'200px', height:'200px'}}/>

                <h3>F.I: {firstName} {lastName}</h3>
                <h3>tel_number:{phone}</h3>
              </div>
            <strong>role:{role}</strong>
          </div>
      </div>
    </>
  );
}

export default User;
