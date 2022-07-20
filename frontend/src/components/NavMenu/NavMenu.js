import React from "react";
import "./NavMenu.css";
import { NavLink } from "react-router-dom";
import { NavText } from "../../Typography";

const NavMenu = (props) => {
  const style = props.style;
  const getActiveLink = ({ isActive }) =>
    isActive ? `active nav-link-${style}` : `nav-link-${style}`;

  return (
    <nav>
      <ul className={`nav-list-${style}`}>
        <li className={`nav-item-${style}`}>
          <NavLink to="/" className={getActiveLink}>
            <NavText className={`nav-text-${style}`}>Про нас</NavText>
          </NavLink>
        </li>
        <li className={`nav-item-${style}`}>
          <NavLink to="/projects" className={getActiveLink}>
            <NavText className={`nav-text-${style}`}>Проекти</NavText>
          </NavLink>
        </li>
        <li className={`nav-item-${style}`}>
          <NavLink to="/reports" className={getActiveLink}>
            <NavText className={`nav-text-${style}`}>Звіти</NavText>
          </NavLink>
        </li>
        <li className={`nav-item-${style}`}>
          <NavLink to="/marketplace" className={getActiveLink}>
            <NavText className={`nav-text-${style}`}>MarketPlace</NavText>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavMenu;
