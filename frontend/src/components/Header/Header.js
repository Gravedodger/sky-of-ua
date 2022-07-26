import React, { useState } from "react";
import MediaQuery from "react-responsive";
import "./Header.css";
import Logo from "../Logo";
import NavMenu from "../NavMenu";
import LanguageSwitch from "../LanguageSwitch";

const Header = ({ setModalActive }) => {
  const [menuOn, setMenuOn] = useState(false);
  const onClickBurger = () => {
    setMenuOn((prevState) => !prevState);
    document.querySelector(".header-burger").classList.toggle("active");
  };

  return (
    <header className="header">
      <div className="main-container ">
        <div className="header-wrap">
          <Logo />
          <MediaQuery maxWidth={767}>
            {menuOn && <NavMenu style={"header"} />}
          </MediaQuery>
          <MediaQuery minWidth={768}>{<NavMenu style={"header"} />}</MediaQuery>
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
