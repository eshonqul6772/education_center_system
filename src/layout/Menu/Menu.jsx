import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import {AiOutlineTeam} from "react-icons/ai"
import {PiStudentBold} from "react-icons/pi"
import {MdGroups2} from "react-icons/md"
import {LiaUserCircleSolid} from "react-icons/lia"

import './Menu.scss';
import Logo from '../../assets/imgs/muazacademy.png';

function Menu() {
  return (
    <div className='menu'>
      <ul className='menu__list'>

      

        <li className='menu__list-item'>
          <Link className='menu__logo border-bottom border-dark' to='/'>
            <img src={Logo} alt={Logo} style={{width:"150px", height:"50px"}}/>
          </Link>
        </li>

        <li className='menu__list-item'>
          <NavLink
            className={({ isActive }) => (isActive ? 'menu__link active' : 'menu__link')}
            to='/user'
          >
            <LiaUserCircleSolid size='40px' />  Users
          </NavLink>
        </li>
        
        <li className='menu__list-item'>
          <NavLink className='menu__link' to='/team'>
            <AiOutlineTeam size="40px"/> Teacher
          </NavLink>
        </li>

        <li className='menu__list-item'>
          <NavLink
            className={({ isActive }) => (isActive ? 'menu__link active' : 'menu__link')}
            to='/group'
          >
            <MdGroups2 size='40px' />  Group
          </NavLink>
        </li>


        <li className='menu__list-item'>
          <NavLink
            className={({ isActive }) => (isActive ? 'menu__link active' : 'menu__link')}
            to='/student'
          >
            <PiStudentBold size='40px' />  Student
          </NavLink>
        </li>


       
       
      </ul>
    </div>
  );
}

export default Menu;
