import React from "react";
import "./Footer.css";
import Logo from "../Logo";
import NavMenu from "../NavMenu";
import SocialLinks from "../SocialLinks/SocialLinks";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="main-container footer-bgc">
      <footer>
        <div className="footer-wrap">

          <div className="footer-contacts">
            <Logo style="footer" />
            <address className="footer-address">
              <a href="mailto:skyofukraine@gmail.com" className="contacts-link">
                skyofukraine@gmail.com
              </a>
              <a href="tel:+380985684325" className="contacts-link">
                +380 98 56 84 325
              </a>
            </address>
            <SocialLinks style="footer" />
          </div>

          <div className="footer-middle">
            <div className="footer-nav">
              <h3 className="footer-title">{t("nav")}</h3>
              <NavMenu style="footer" />
            </div>
            <div className="footer-partners">
              <h3 className="footer-title">{t("partners")}</h3>
              <ul>
                <li className="partners-item">
                  <p className="partners-title">{t("partners")}</p>
                </li>
                <li className="partners-item">
                  <p className="partners-title">{t("partners")}</p>
                </li>
                <li className="partners-item">
                  <p className="partners-title">{t("partners")}</p>
                </li>
                <li className="partners-item">
                  <p className="partners-title">{t("partners")}</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-support">
            <h3 className="footer-title">{t("supported_by")}</h3>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer;
