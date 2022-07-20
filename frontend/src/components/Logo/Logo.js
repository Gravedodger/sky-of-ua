import React from "react";
import "./Logo.css";
import { Link } from "react-router-dom";
import logoSky from "../../assets/logo/mainLogo-default.png";

const Logo = (props) => {
  const style = props.style;
  return (
    <Link to="/">
      <img src={logoSky} className={`logo logo-${style}`} alt="Sky of Ukraine main logo" width={130} height={30}/>
    </Link>
  );
};

export default Logo;
