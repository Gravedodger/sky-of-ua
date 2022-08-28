import React from "react";
import "./PartnersCard.css";
import { useTranslation } from "react-i18next";
import "../../i18n";

const PartnersCard = ({
  partnerImage,
  partnerImageAlt,
  partnerTitle,
  partnerDescription,
}) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="partners-image-wrap">
        <img
          src={partnerImage}
          alt={partnerImageAlt}
          className="partners-image"
        />
        <p className="partners-image-copyrigth">{partnerTitle}</p>
      </div>

      <h3 className="partner-block-title">{partnerTitle}</h3>
      <p className="partner-block-text">{partnerDescription}</p>
      <button className="btn">
        <p className="btn-text">{t("details")}</p>
      </button>
    </>
  );
};

export default PartnersCard;
