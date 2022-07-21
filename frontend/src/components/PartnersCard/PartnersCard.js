import React from 'react';
import './PartnersCard.css';
import { PartnerBlockText, PartnerBlockTitle, Button, ButtonText } from "../../Typography";
import { useTranslation } from "react-i18next";
import '../../i18n';

const PartnersCard = ({partnerImage, partnerImageAlt, partnerTitle, partnerDescription}) => {
    const { t } = useTranslation();

    return (
        <div className="partners-card-container">
            <div className="partner-image">
                <img src={partnerImage} alt={partnerImageAlt} className="partner-image-pic" />
            </div>
            <PartnerBlockTitle>{partnerTitle}</PartnerBlockTitle>
            <PartnerBlockText>{partnerDescription}</PartnerBlockText>
            <Button className="partners-card-button">
                <ButtonText>{t("details")}</ButtonText>
            </Button>
        </div>
    )
}

export default PartnersCard;
