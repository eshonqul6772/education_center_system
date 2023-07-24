import React from 'react'
import { LiaUserCircleSolid } from "react-icons/lia"

import "./Navbar.scss"

const Navbar = () => {
  return (
    <div className='navbar'>

      <div className='navbar__content'>

        <h2>Category_Title</h2>

        <button className='navbar__btn'><LiaUserCircleSolid size='50px' /></button>
      </div>

    </div>
  )
}

export default Navbar
