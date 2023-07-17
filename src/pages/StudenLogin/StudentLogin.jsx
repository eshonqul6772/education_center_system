import React from 'react'
import {Input,Button } from "antd"

import Logo from '../../assets/imgs/muazacademy.png'
import Img from "../../assets/imgs/teacher.jpg"
import "./StudentLogin.scss"

 const StudenLogin = () => {
  return (
    <>
     <div className='wrapper'>
      <form action="">

        <div>
          <img style={{width:"300px", height:"60px"}} src={Logo} alt={"logo"}/>

        </div>


          <img src={Img} alt='img' style={{width:"350px", height:"230px", borderRadius:"15px"}}/>

          <div className='form__box'>
              <Input placeholder="Tel Number" />
              <Input.Password placeholder="password" />
          </div>

          <button  className='btn__submit' >Login</button>
      </form>
     </div>
    </>
  )
}

export default StudenLogin