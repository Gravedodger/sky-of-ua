import React from 'react';
import './HelpSection.css';
import { ButtonText, SectionTitleText } from "../../Typography";
import { useTranslation } from "react-i18next";
import '../../i18n';

import MilitaryExercise from '../../assets/images/military-photo.png';
import PlasticForms from '../../assets/images/plastic-forms.png';
import HoldingHand from '../../assets/images/sick-child.png';

import HandsIcn from '../../assets/icons/icn-hands.svg';
import FirstAidKitIcn from '../../assets/icons/icn-aid.svg'
import ServicemanIcn from '../../assets/icons/icn-military.svg';

const HelpSection = () => {
    const { t } = useTranslation();

    return (
        <section className="help-section-wrap">
            <div className="section-title">
                <SectionTitleText>
                    {t("help_section_title")}
                </SectionTitleText>
            </div>

            <div className="help-section-container">
                <div className="help-section-images">
                    <div className="top-pic">
                        <img
                            src={MilitaryExercise}
                            alt={t("help_section.img_1_Alt")}
                            className="help-pic-1"
                        />
                    </div>

                    <div>
                        <img
                            src={PlasticForms}
                            alt={t("help_section.img_2_Alt")}
                            className="help-pic-2"
                        />

                        <img
                            src={HoldingHand}
                            alt={t("help_section.img_3_Alt")}
                            className="help-pic-3"
                        />
                    </div>
                </div>

                <div className="help-section-text">
                    <SectionTitleText className="help-section-title">
                        {t("help_section.title")}
                    </SectionTitleText>

                    <p className="help-section-description">
                        {t("help_section.description")}
                    </p>

                    <div className="icons-with-labels">
                        <div className="icons-with-labels-row">
                            <img
                                src={HandsIcn}
                                alt={t("help_section.icn_top_Alt")}
                                className="help-icn"
                            />

                            <p className="help-label">
                                {t("help_section.label_top")}
                            </p>
                        </div>

                        <div className="icons-with-labels-row">
                            <img
                                src={FirstAidKitIcn}
                                alt={t("help_section.icn_middle_Alt")}
                                className="help-icn"
                            />

                            <p className="help-label">
                                {t("help_section.label_middle")}
                            </p>
                        </div>

                        <div className="icons-with-labels-row">
                            <img
                                src={ServicemanIcn}
                                alt={t("help_section.icn_bottom_Alt")}
                                className="help-icn"
                            />

                            <p className="help-label">
                                {t("help_section.label_bottom")}
                            </p>
                        </div>
                    </div>

                    <div className="help-section-buttons-container">
                        <a href="/">
                            <button className="start-presentation-request-btn" type="button">
                                <ButtonText className="start-presentation-request-btn-text">
                                    {t("request_support")}
                                </ButtonText>
                            </button>
                        </a>

                        <a href="Projects">
                            <button className="start-presentation-support-btn" type="button">
                                <ButtonText className="start-presentation-support-btn-text">
                                    {t("take_part")}
                                </ButtonText>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HelpSection;
