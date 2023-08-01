import { useNavigate } from "react-router-dom";
import { LiaUserCircleSolid } from "react-icons/lia";


import "./Navbar.scss"

const Navbar = () => {

  const navigate = useNavigate('')

  
  const logout = () => {
    localStorage.removeItem('token');
    navigate('/')
  };
  

  return (
    <div className='navbar'>

      <div className='navbar__content'>

        <h2>Category_Title</h2>

        <button onClick={logout} className='navbar__btn'><LiaUserCircleSolid size='50px' /></button>
      </div>

    </div>
  )
}

export default Navbar
