import { useNavigate } from "react-router-dom";
import { LiaUserCircleSolid } from "react-icons/lia";
import { useDispatch } from 'react-redux';


import { logout } from '../../reducers/actions/auth';


import "./Navbar.scss"

const Navbar = () => {

  const navigate = useNavigate('')
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };



  return (
    <div className='navbar'>

      <div className='navbar__content'>

        <h2>Category_Title</h2>

        <button onClick={handleLogout} className='navbar__btn'><LiaUserCircleSolid size='50px' /></button>
      </div>

    </div>
  )
}


export default Navbar;
