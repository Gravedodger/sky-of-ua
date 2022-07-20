import React from "react";
import "./NavMenu.css";
import { NavLink } from "react-router-dom";
import { NavText } from "../../Typography";
import { useTranslation } from "react-i18next";

const NavMenu = (props) => {
  const { t } = useTranslation();
  const style = props.style;
  const getActiveLink = ({ isActive }) => isActive ? `active nav-link-${style}` : `nav-link-${style}`;

  return (
    <nav className={`nav__overlay-${style}`}>
      <ul className={`nav__list-${style}`}>
        <li className={`nav__item-${style}`}>
          <NavLink to="/" className={getActiveLink}>
            <NavText className={`nav-text-${style}`}>{t("nav_about_us")}</NavText>
            <NavText className={`nav__text-${style}`}>Про нас</NavText>
          </NavLink>
        </li>
        <li className={`nav__item-${style}`}>
          <NavLink to="/projects" className={getActiveLink}>
            <NavText className={`nav-text-${style}`}>{t("nav_projects")}</NavText>
            <NavText className={`nav__text-${style}`}>Проекти</NavText>
          </NavLink>
        </li>
        <li className={`nav__item-${style}`}>
          <NavLink to="/reports" className={getActiveLink}>
            <NavText className={`nav-text-${style}`}>{t("nav_reports")}</NavText>
            <NavText className={`nav__text-${style}`}>Звіти</NavText>
          </NavLink>
        </li>
        <li className={`nav__item-${style}`}>
          <NavLink to="/marketplace" className={getActiveLink}>
            <NavText className={`nav-text-${style}`}>{t("nav_marketplace")}</NavText>

            <NavText className={`nav__text-${style}`}>MarketPlace</NavText>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
