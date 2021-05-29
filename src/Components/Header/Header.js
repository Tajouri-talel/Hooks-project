import './Header.css';
import React from "react";

const Header = () => {
  return (
    <div className="navbar_main">
            <div className="logo">
            <img className="logoimg" src="./imgs/logo.png" alt="logo" height="50px"></img>
            <div className="nav_right">UNLIMITED TV SHOWS & MOVIES
                <button className="btn_join_now">JOIN NOW</button>
                <button className="btn_sign">SIGN IN</button>
            </div>
            </div>
        </div>
  );
};

export default Header;