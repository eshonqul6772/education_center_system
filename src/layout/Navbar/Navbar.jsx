import { useNavigate } from "react-router-dom";
import { LiaUserCircleSolid } from "react-icons/lia";
import { Select } from 'antd';


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

        <Select
          defaultValue="lucy"
          style={{
            width: 120, }}
          options={[
            {
              value: 'lucy',
              label: 'Lucy',
            },
          ]}
        />

        <button onClick={logout} className='navbar__btn'><LiaUserCircleSolid size='50px' /></button>
      </div>

    </div>
  )
}


export default Navbar;
