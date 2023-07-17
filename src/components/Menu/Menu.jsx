import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import './Menu.scss';
import Logo from '../../assets/svg/logo.svg';

function Menu() {
    return (
        <div className='menu'>
            <ul className='menu__list'>

                <li className='menu__list-item'>
                    <Link className='menu__logo border-bottom border-dark' to='/'>
                        <img src={Logo} alt={Logo} />
                    </Link>
                </li>

                <li className='menu__list-item'>
                    <NavLink className='menu__link' to='/'>
                        <AiFillHome size='25' /> Buyurtma
                    </NavLink>
                </li>

                <li className='menu__list-item'>
                    <NavLink className='menu__link' to='/'>
                        <AiFillHome size='25' /> Buyurtma
                    </NavLink>
                </li>

            </ul>
        </div>
    );
export default Menu;



