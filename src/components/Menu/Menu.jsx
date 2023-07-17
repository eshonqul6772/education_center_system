import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FaUserAlt } from 'react-icons/fa';
import {AiOutlineTeam} from "react-icons/ai"


import './Menu.scss';
import Logo from '../../assets/svg/logo.svg';

function Menu() {
  return (
    <header className='menu'>
      <ul className='menu__list'>
        <li className='menu__list-item'>
          <Link className='menu__logo border-bottom border-dark' to='/'>
            <img src={Logo} alt={Logo} />
          </Link>
        </li>

        <li className='menu__list-item'>
          <NavLink className='menu__link' to='/'>
          <AiOutlineTeam size="40px" color='#e3e0e0'/> Teacher
          </NavLink>
        </li>

        <li className='menu__list-item'>
          <NavLink
            className={({ isActive }) => (isActive ? 'menu__link active' : 'menu__link')}
            to='/costumer'
          >
            <FaUserAlt size='25' />  Group
          </NavLink>
        </li>

        

       
      </ul>
    </header>
  );
}

export default Menu;
