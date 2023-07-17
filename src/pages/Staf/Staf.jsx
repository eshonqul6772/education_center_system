import React from 'react'
import {Link, Outlet} from "react-router-dom";
import {PiStudentBold} from "react-icons/pi"
import {AiOutlineTeam} from "react-icons/ai"
import {TbUserCircle} from "react-icons/tb"

import Logo from "../../assets/imgs/muazacademy.png"
import IMg from "../../assets/imgs/muazacademy2.png"
import "./Staf.scss"

const Staf = () => {
    return (
        <>
            <div>
                <div className='container'>
                    <div className='choose__stafe'>
                        <div>
                            <div style={{marginBottom: "150px"}}>
                                <img style={{width:"250px", height:"60px"}} src={Logo} alt={"logo"}/>
                            </div>

                            <div className='choose__link-box'>

                            <h2 style={{fontSize:"40px", marginBottom:"50px"}}>Choose your profile</h2>
                                <Link className='choose__link' to="/admin">
                                    <PiStudentBold size='40px' color='#e3e0e0'/>
                                    <div>
                                        <span>Admin</span>
                                        <p>welco admin gaziga bos charchama</p>
                                    </div>
                                </Link>

                                <Link className='choose__link' to="/teacher">
                                    <TbUserCircle size='40px' color='#e3e0e0'/>
                                    <div>
                                        <span>Teacher</span>
                                        <p>welco to studend login davay bosamiz talabalar</p>
                                    </div>
                                </Link>

                                <Link className='choose__link' to='/support'>
                                    <AiOutlineTeam size="40px" color='#e3e0e0'/>

                                    <div>
                                        <span>Support</span>
                                        <p>welcom to goo Satf page ketu ukalar</p>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className='home-img'>
                            <img className='baner__img' src={IMg} alt={"img"}/>
                        </div>

                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Staf;
