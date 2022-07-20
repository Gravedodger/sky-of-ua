import React from "react";
import "./NavMenu.css";
import { NavLink } from "react-router-dom";
import { NavText } from "../../Typography";

const NavMenu = (props) => {
  const { style } = props;

  const getActiveLink = ({ isActive }) =>
    isActive ? `active nav__link-${style}` : `nav__link-${style}`;

  return (
    <nav className={`nav__overlay-${style}`}>
      <ul className={`nav__list-${style}`}>
        <li className={`nav__item-${style}`}>
          <NavLink to="/" className={getActiveLink}>
            <NavText className={`nav__text-${style}`}>Про нас</NavText>
          </NavLink>
        </li>
        <li className={`nav__item-${style}`}>
          <NavLink to="/projects" className={getActiveLink}>
            <NavText className={`nav__text-${style}`}>Проекти</NavText>
          </NavLink>
        </li>
        <li className={`nav__item-${style}`}>
          <NavLink to="/reports" className={getActiveLink}>
            <NavText className={`nav__text-${style}`}>Звіти</NavText>
          </NavLink>
        </li>
        <li className={`nav__item-${style}`}>
          <NavLink to="/marketplace" className={getActiveLink}>
            <NavText className={`nav__text-${style}`}>MarketPlace</NavText>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavMenu;
