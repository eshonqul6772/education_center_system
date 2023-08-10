import { useNavigate } from "react-router-dom";
import { LiaUserCircleSolid } from "react-icons/lia";
import { useDispatch } from "react-redux";
import { Button, Dropdown } from "antd";

import { logout } from "../../reducers/actions/auth";

import "./Navbar.scss";

const Navbar = () => {
  const navigate = useNavigate("");
  // const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  const items = [
    {
      key: "1",
      label: <button onClick={handleLogout}>Logout</button>,
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
