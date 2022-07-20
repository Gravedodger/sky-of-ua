import React from "react";
import "./SocialLinks.css";
import { ReactComponent as IconTelegram } from "../../assets/icons/icn-telegram.svg";
import { ReactComponent as IconInstagram } from "../../assets/icons/icn-instagram.svg";
import { ReactComponent as IconFacebook } from "../../assets/icons/icn-facebookLogo.svg";

const SocialLinks = (props) => {
  const style = props.style;

  return (
    <ul className="socialLinks-list">
      <li className="socialLinks-item">
        <a href="#" className="socialLinks-link">
          <IconTelegram className={`socialLinks-icon-${style}`} />
        </a>
      </li>
      <li className="socialLinks-item">
        <a href="#" className="socialLinks-link">
          <IconInstagram className={`socialLinks-icon-${style}`} />
        </a>
      </li>
      <li className="socialLinks-item">
        <a href="#" className="socialLinks-link">
          <IconFacebook className={`socialLinks-icon-${style}`} />
        </a>
      </li>
    </ul>
  )
}

export default SocialLinks;
