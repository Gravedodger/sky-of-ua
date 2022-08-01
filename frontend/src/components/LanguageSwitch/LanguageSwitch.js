import React, { useState } from "react";
import "./LanguageSwitch.css";
import i18n from "../../i18n";

const LanguageSwitch = () => {
  const [language, setLanguage] = useState("uk");

  const handleOnClick = (e) => {
    e.preventDefault();
    setLanguage(e.target.value);
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="header-language">
      <button value="uk" className="lang-btn" onClick={handleOnClick}>
        UA
      </button>
      <button value="en" className="lang-btn" onClick={handleOnClick}>
        EN
      </button>
    </div>
  );
};

export default LanguageSwitch;
