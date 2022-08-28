import React from "react";
import "./NavMenu.scss";
import { NavLink } from "react-router-dom";
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
            <p className={`nav-text nav-text-${style}`}>
              {t("nav_about_us")}
            </p>
          </NavLink>
        </li>
        <li className={`nav-item-${style}`}>
          <NavLink to="/projects" className={getActiveLink}>
            <p className={`nav-text nav-text-${style}`}>
              {t("nav_projects")}
            </p>
          </NavLink>
        </li>
        <li className={`nav-item-${style}`}>
          <NavLink to="/reports" className={getActiveLink}>
            <p className={`nav-text nav-text-${style}`}>
              {t("nav_reports")}
            </p>
          </NavLink>
        </li>
        {/*  МАРКЕТ ПЛЕЙС ПОКИ НЕ ПОТРІБЕН */}
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
