import React from 'react';
import './PartnersSectionBlock.css';
import { PartnerBlockText, PartnerBlockTitle, Button, ButtonText } from "../../Typography";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { useTranslation } from "react-i18next";

import '../../i18n';

const PartnersSectionBlock = ({partnerImage, partnerImageAlt, partnerTitle, partnerDescription}) => {
    const { t } = useTranslation();

    return (
        <div className="partners-block-container">
            <div className="partner-image">
                <img src={partnerImage} alt={partnerImageAlt} className="partner-image-pic" />
            </div>
            <PartnerBlockTitle>{partnerTitle}</PartnerBlockTitle>
            <PartnerBlockText>{partnerDescription}</PartnerBlockText>
            <Button>
                <ButtonText>{t("details")}</ButtonText>
            </Button>

        </div>
    )
}

export default PartnersSectionBlock;
