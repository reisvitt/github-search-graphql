import React from "react";
import logo from "../../images/github_logo_icon.png";
import "./index.css";

const Header = () => {
  return (
    <div className="container_header">
      <img className="editImage" src={logo} alt="GitHub_logo" />

      <span className="title">GitHub Search</span>
    </div>
  );
};
export default Header;
