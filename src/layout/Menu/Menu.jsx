import React from "react";
import { NavLink, Link } from "react-router-dom";


import PathName from "./PathName.js";
import "./Menu.scss";
import Logo from "../../assets/imgs/muazacademy.png";

function Menu() {
  return (
    <div className="menu">
      <ul className="menu__list">
        <div className="menu__list-logo">
          <Link
            className="menu__logo border-bottom border-dark"
            to="/dashboard/"
          >
            <img
              src={Logo}
              alt={Logo}
              style={{ width: "150px", height: "50px" }}
            />
          </Link>
        </div>

        {PathName.map((e, id) => {
          return (
            <li className="menu__list-item" key={id}>
              <NavLink to={e.path} className="menu__link">
               {e.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Menu;
