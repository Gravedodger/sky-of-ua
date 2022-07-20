import React from "react";
import "./Header.css";
import Logo from "../Logo";
import NavMenu from "../NavMenu";

const Header = () => {
  return (
    <header>
      <div className="main-container header-gradient">
        <div className="header-wrap">
          <Logo style="header" />
          <NavMenu style="header" />
          <span className="header-language">UA</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
