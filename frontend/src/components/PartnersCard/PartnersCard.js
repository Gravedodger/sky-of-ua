import React from "react";
import "./PartnersCard.css";
import {
  PartnerBlockText,
  PartnerBlockTitle,
  Button,
  ButtonText,
} from "../../Typography";
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

      <PartnerBlockTitle>{partnerTitle}</PartnerBlockTitle>
      <PartnerBlockText>{partnerDescription}</PartnerBlockText>
      <Button>
        <ButtonText>{t("details")}</ButtonText>
      </Button>
    </>
  );
};

export default PartnersCard;
