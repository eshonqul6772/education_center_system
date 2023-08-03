import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Input } from "antd";

import { login } from 'reducers/actions/auth';
import Img from "assets/imgs/teacher.jpg";
import Logo from 'assets/imgs/muazacademy.png';
import "./StudentLogin.scss";


const StudenLogin = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate('')

  const [values, setValues] = useState({
    username: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(login(values.username, values.password))
      .then((res) => {
        navigate("/dashbaord");
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <>
      <div className='wrapper'>
        <form onSubmit={handleSubmit} action="">

          <div>
            <img style={{ width: "300px", height: "60px" }} src={Logo} alt={"logo"} />
          </div>

            <img src={Img} alt='img' style={{ width: "350px", height: "230px", borderRadius: "15px" }} />

          <div className='form__box'>
            <Input
              type='text'
              name='username'
              placeholder='login'
              value={values.username}
              onChange={handleInputChange} />

            <Input.Password
              type='password'
              name='password'
              placeholder='Password'
              value={values.password}
              onChange={handleInputChange}
            />
          </div>
          <button className='btn__submit' >Login</button>
        </form>
      </div>
    </>
  )
}

export default StudenLogin;