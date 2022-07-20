// НЕОБХІДНО ДОРОБИТИ:
// 1. Щоб в моб версії, при кліку поза меню, та при виборі пункту => меню закривалося

import React, { useState } from "react";
import MediaQuery from "react-responsive";
import "./Header.css";
import Logo from "../Logo";
import NavMenu from "../NavMenu";

const Header = () => {
  const [menuOn, setMenuOn] = useState(false);
  const onClickBurger = () => {
    setMenuOn((prevState) => !prevState);
    document.querySelector(".header__burger").classList.toggle("active");
  };
  return (
    <header>
      <div className="main-container header-gradient">
        <div className="header-wrap">
          <Logo style="header" />
          <div className="header__burger" onClick={onClickBurger}>
            <span></span>
          </div>
          <MediaQuery maxWidth={767}>
            {menuOn && <NavMenu style="header" />}
          </MediaQuery>
          <MediaQuery minWidth={768}>{<NavMenu style="header" />}</MediaQuery>
          <span className="header-language">UA</span>
        </div>
      </div>
    </header>
  );
};

export default Header;
