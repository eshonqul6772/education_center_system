import React from "react";
import { NavLink, Link } from "react-router-dom";

import useAuth from 'reducers/hooks';

import Logo from "assets/imgs/muazacademy.png";

import menu from "./menu.js";

import "./Menu.scss";

function Menu() {
  const { role } = useAuth()

  return (
    <div className="menu">
      <ul className="menu__list">
        <div className="menu__list-logo">
          <Link
            className="menu__logo border-bottom border-dark"
            to="/dashboard"
          >
            <img
              src={Logo}
              alt={Logo}
              style={{ inlineSize: "150px", blockSize: "50px" }}
            />
          </Link>
        </div>

        {menu
            .filter(item => item.accessRoles.includes(role))
            .map(({ path, title }, index) => (
                <li className="menu__list-item" key={path}>
                  <NavLink to={path} className="menu__link">
                    {title}
                  </NavLink>
                </li>
            ))}
      </ul>
    </div>
  );
}

export default Menu;
