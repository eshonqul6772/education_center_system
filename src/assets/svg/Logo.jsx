import React from 'react'

import "./Logo.scss"
import Img from "./logoipsum-268.svg"



 const Logo = () => {
  return (
    <div className='warapperLogo'>
        <img src={Img} alt='logo'/>
        <p>math training <br/> center</p>
    </div>
  )
}

export default Logo;