import React, { useState } from "react";
import "./Header.css";
import Logo from "../Logo";
import NavMenu from "../NavMenu";
import i18n from './../../i18n';

const Header = () => {
    const [language, setLanguage] = useState('uk');
    const handleOnClick= (e) => {
        e.preventDefault();
        setLanguage(e.target.value);
        i18n.changeLanguage(e.target.value);
    }

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
        </div>
      </div>
    </header>
  );
};

export default Header;
