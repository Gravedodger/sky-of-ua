import React, { useState } from "react";
// НЕОБХІДНО ДОРОБИТИ:
// 1. Щоб в моб версії, при кліку поза меню, та при виборі пункту => меню закривалося
import MediaQuery from "react-responsive";
import "./Header.css";
import Logo from "../Logo";
import NavMenu from "../NavMenu";
import i18n from './../../i18n';

const Header = () => {
    const [language, setLanguage] = useState('uk');
    const [menuOn, setMenuOn] = useState(false);
    const onClickBurger = () => {
        setMenuOn((prevState) => !prevState);
        document.querySelector(".header__burger").classList.toggle("active");
    };
    const handleOnClick= (e) => {
        e.preventDefault();
        setLanguage(e.target.value);
        i18n.changeLanguage(e.target.value);
    };

  return (
    <header>
      <div className="main-container header-gradient">
        <div className="header-wrap">
          <Logo style="header" />
          <NavMenu style="header" lang={language} />
          <div className="header-language">
              <button value='uk' onClick={handleOnClick}>
                  UA
              </button>
              <button value='en' onClick={handleOnClick}>
                  ENG
              </button>
          </div>

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
