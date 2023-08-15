import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button, Dropdown } from "antd";
import { LiaUserCircleSolid } from "react-icons/lia";
import {FiLogOut} from "react-icons/fi"

import "./Navbar.scss";
import {LOGOUT} from '../../reducers/types';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = () => {
    navigate('/')
    dispatch({ type: LOGOUT })
  };

  const items = [
    {
      key: "1",
      label: <button className="text-danger" onClick={handleLogout}>Logout <FiLogOut color="red"/></button>,
    },
  ];


  return (
    <div className="navbar">
      <div className="navbar__content">
        <h2>Category_Title</h2>

        <Dropdown
          menu={{
            items,
          }}
          placement="bottom"
          arrow
        >
          <Button className="navbar__btn">
            <LiaUserCircleSolid size="40px" />
          </Button>
        </Dropdown>
      </div>
    </div>
  );
};

export default Navbar;
