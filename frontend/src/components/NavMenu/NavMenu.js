import React from "react";
import "./NavMenu.scss";
import { NavLink } from "react-router-dom";
import { NavText } from "../../Typography";
import { useTranslation } from "react-i18next";

const NavMenu = (props) => {
  const { t } = useTranslation();
  const style = props.style;
  const getActiveLink = ({ isActive }) =>
    isActive ? `active nav-link-${style}` : `nav-link-${style}`;

  return (
    <nav className={`nav-overlay-${style}`}>
      <ul className={`nav-list-${style}`}>
        <li className={`nav-item-${style}`}>
          <NavLink to="/" className={getActiveLink}>
            <NavText className={`nav-text-${style}`}>
              {t("nav_about_us")}
            </NavText>
          </NavLink>
        </li>
        <li className={`nav-item-${style}`}>
          <NavLink to="/projects" className={getActiveLink}>
            <NavText className={`nav-text-${style}`}>
              {t("nav_projects")}
            </NavText>
          </NavLink>
        </li>
        <li className={`nav-item-${style}`}>
          <NavLink to="/reports" className={getActiveLink}>
            <NavText className={`nav-text-${style}`}>
              {t("nav_reports")}
            </NavText>
          </NavLink>
        </li>
        {/*  МАРКЕТ ПЛЕЙСТ ПОКИ НЕ ПОТРІБЕН */}
        {/* <li className={`nav-item-${style}`}>
          <NavLink to="/marketplace" className={getActiveLink}>
            <NavText className={`nav-text-${style}`}>{t("nav_marketplace")}</NavText>
          </NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default NavMenu;
