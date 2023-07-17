import useState from 'react'
import {Input } from "antd"
import { useDispatch } from 'react-redux';

import Logo from '../../assets/imgs/muazacademy.png'
import Img from "../../assets/imgs/teacher.jpg"

import { login } from '../../reducers/actions/auth';

 const StudenLogin = () => {

  const dispatch = useDispatch();
  const [values, setValues] = useState({
    userName: '',
    password: '',
  });

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    dispatch(login(values.userName, values.password))
      .then(() => {
        // navigate("/costumer");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
    
     <div className='wrapper'>
      <form action="">

       <div>
         <img  style={{width:"300px", height:"60px"}} src={Logo} alt={"logo"}/>
       </div>


          <img src={Img} alt='img' style={{width:"350px", height:"230px", borderRadius:"15px"}}/>

          <div className='form__box'>

           <input
             type='text'
                name='userName'
                placeholder='login'
                value={values.userName}
                onChange={handleInputChange}
           />

           <input
             type='password'
                name='password'
                placeholder='Password'
                value={values.password}
                onChange={handleInputChange}
           />

              {/* <Input placeholder="login" />
              <Input.Password placeholder="password" /> */}
          </div>

          <button  className='btn__submit' >Login</button>
      </form>
     </div>
    </>
  )
}

export default StudenLogin