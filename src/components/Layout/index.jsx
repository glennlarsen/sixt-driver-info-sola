import React, { useState, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { stack as Menu } from "react-burger-menu";
import { confirmAlert } from "react-confirm-alert";
import AuthContext from "utils/AuthContext";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Tooltip from "@mui/material/Tooltip";

function Layout({ children, showBackButton, backPage, showHowItWorks }) {
  const [auth, setAuth] = useContext(AuthContext);
  const [menuState, setMenuState] = useState(false);
  const navigate = useNavigate();

  const closeMenu = () => {
    setMenuState(false);
  };

  const handleStateChange = (state) => {
    setMenuState(state.isOpen);
  };

  const logout = () => {
    closeMenu();
    confirmAlert({
      title: "Logout",
      message: "Are you sure you want to logout?",
      buttons: [
        {
          label: "Yes",
          onClick: () => {
            setAuth(null);
            navigate("/");
          },
        },
        {
          label: "No",
          onClick: () => null,
        },
      ],
    });
  };

  const goBack = () => {
    navigate(backPage ? `/${backPage}` : -1);
    closeMenu();
  };

  return (
    <div className="main-layout">
      <Menu
        width={310}
        right
        isOpen={menuState}
        onStateChange={handleStateChange}
      >
        <h2>Menu</h2>
        <Tooltip title="Go back">
          <ArrowBackIcon
            className="btn-back"
            onClick={goBack}
            style={{ display: showBackButton }}
          ></ArrowBackIcon>
        </Tooltip>
        <NavLink
          to="/howitworks"
          onClick={() => closeMenu()}
          style={{ display: showHowItWorks }}
        >
          How it Works?
        </NavLink>
        <span>
          <strong>User:</strong>
        </span>
        <address>{auth ? auth.user.username : null}</address>
        <button onClick={logout} className="btn-menu__mobile">
          Logout
        </button>
      </Menu>
      <nav className="desktop-nav">
        <Tooltip title="Go back">
          <ArrowBackIcon
            className="btn-back"
            onClick={goBack}
            style={{ display: showBackButton }}
          ></ArrowBackIcon>
        </Tooltip>
        <NavLink to="/howitworks" style={{ display: showHowItWorks }}>
          How it Works?
        </NavLink>
        <span>
          <strong>User:</strong>
        </span>
        <address>{auth ? auth.user.username : null}</address>
        <button onClick={logout} className="btn-menu">
          Logout
        </button>
      </nav>
      {children}
    </div>
  );
}

export default Layout;
