import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NavA, NavBody, Navigation, NavUl } from "../../styles/Navbar.styles";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();

  const homeNavigate = () => {
    navigate("/home");
  };

  const ListsNavigate = () => {
    navigate("/contactLists");
  };

  const [toggleMenu, setToggleMenu] = useState("");

  const handleToggle = () => {
    if (toggleMenu) {
      setToggleMenu(false);
    } else {
      setToggleMenu(true);
    }
  };

  const [logo, setLogo] = useState(null);
  console.log(logo);

  useEffect(() => {
    fetch("https://intern-api.engineerscradle.com/api/ft/task3/layout/logo", {
      headers: {
        authorization: "v3p42mqQDWrg9j4gvbTrxT808n30vr5483",
      },
    })
      .then((res) => res.json())
      .then((data) => setLogo(data));
  }, []);
  return (
    <NavBody>
      <Navigation>
        <NavUl className="menu">
          <li className="logo">
            <img
              style={{ width: "156px", cursor: "pointer" }}
              src="https://i.ibb.co/fGvsC0H/mdsanju-white-logo.png"
              alt=""
            />
          </li>
          <li className={toggleMenu ? "item active" : "item"}>
            <NavA onClick={homeNavigate}>Home</NavA>
          </li>
          <li className={toggleMenu ? "item active" : "item"}>
            <NavA onClick={ListsNavigate}>Lists</NavA>
          </li>

          <li className={toggleMenu ? "item button active" : "item button"}>
            <NavA>Log In</NavA>
          </li>
          <li
            className={
              toggleMenu
                ? "item button secondary active"
                : "item button secondary"
            }
          >
            <NavA>Sign Up</NavA>
          </li>
          <li onClick={handleToggle} className="toggle">
            <span className="bars"></span>
          </li>
        </NavUl>
      </Navigation>
    </NavBody>
  );
};

export default Navbar;
