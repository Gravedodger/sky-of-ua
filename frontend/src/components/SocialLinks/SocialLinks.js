import React from "react";
import "./SocialLinks.css";
import { ReactComponent as IconTelegram } from "../../assets/icons/icn-telegram.svg";
import { ReactComponent as IconInstagram } from "../../assets/icons/icn-instagram.svg";
import { ReactComponent as IconFacebook } from "../../assets/icons/icn-facebookLogo.svg";

const SocialLinks = (props) => {
  const style = props.style;

  return (
    <ul className={`socialLinks-list-${style}`}>
      <li className="socialLinks-item">
        <a
          href="https://t.me/the_sky_of_ukraine"
          className="socialLinks-link"
          target="_blank"
        >
          <IconTelegram className={`socialLinks-icon-${style}`} />
        </a>
      </li>
      <li className="socialLinks-item">
        <a
          href="https://instagram.com/the_sky_of_ukraine?igshid=YmMyMTA2M2Y="
          className="socialLinks-link"
          target="_blank"
        >
          <IconInstagram className={`socialLinks-icon-${style}`} />
        </a>
      </li>
      <li className="socialLinks-item">
        <a
          href="https://www.facebook.com/groups/neboukrainu"
          className="socialLinks-link"
          target="_blank"
        >
          <IconFacebook className={`socialLinks-icon-${style}`} />
        </a>
      </li>
    </ul>
  );
};

export default SocialLinks;
