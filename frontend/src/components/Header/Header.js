import React, { useState } from "react";
import MediaQuery from "react-responsive";
import "./Header.css";
import Logo from "../Logo";
import NavMenu from "../NavMenu";
import LanguageSwitch from "../LanguageSwitch";

const Header = () => {
  const [menuOn, setMenuOn] = useState(false);
  const onClickBurger = () => {
    console.log("clici");
    setMenuOn((prevState) => !prevState);
    document.querySelector(".header-burger").classList.toggle("active");
  };

  return (
    <header>
      <div className="main-container header-gradient">
        <div className="header-wrap">
          <Logo style="header" />
          <MediaQuery maxWidth={767}>
            {menuOn && <NavMenu style="header" />}
          </MediaQuery>
          <MediaQuery minWidth={768}>{<NavMenu style="header" />}</MediaQuery>
          <LanguageSwitch />
          <div className="header-burger" onClick={onClickBurger}>
            <span />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
