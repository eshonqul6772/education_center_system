import React, {useState, useNavigate} from 'react'
import {Button, Input} from 'antd'

import "./AdminLofin.scss"
import {login} from '../../reducers/actions/auth.js';
import Logo from "../../assets/imgs/muazacademy.png"
import IMg from "../../assets/imgs/muazacademy2.png"


const AdminLogin = () => {

    // const dispatch = useDispatch();
    // const navigate = useNavigate('')


    // const [values, setValues] = useState({
    //     username: '',
    //     password: '',
    // });

    // const handleInputChange = (e) => {
    //     setValues({ ...values, [e.target.name]: e.target.value });
    // };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     (login(values.username, values.password))
    //         .then((res) => {
    //             console.log(res)
    //             navigate("/dashbaord")


    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };


    return (
        <>
            <div>
                <div className='containers'>
                    <div className='choose__stafe'>
                        <div>
                            <div style={{marginBottom: "150px"}}>
                                <img style={{width: "250px", height: "60px"}} src={Logo} alt={"logo"}/>
                            </div>

                            <div className='choose__link-box'>

                                <h2 style={{fontSize: "40px", marginBottom: "50px"}}>Olg'a admin brat tezro parolni
                                    kirit</h2>
                                <form action="">
                                    <h2>admin Login</h2>

                                    <div className='form__box'>
                                        <Input
                                            type='text'
                                            name='username'
                                            placeholder='login'
                                            // value={values.username}
                                            // onChange={handleInputChange} 

                                        />


                                        <Input.Password
                                            type='password'
                                            name='password'
                                            placeholder='Password'
                                            // value={values.password}
                                            // onChange={handleInputChange}
                                        />

                                    </div>

                                    <Button className='btn__submit' type="primary">login</Button>
                                </form>

                            </div>
                        </div>

                        <div className='home-img'>
                            <img className='baner__img' src={IMg} alt={"img"}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AdminLogin;


