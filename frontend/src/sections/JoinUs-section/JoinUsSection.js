import React from 'react';
import './JoinUsSection.css';
import { SectionTitleText } from "../../Typography";
import { useTranslation } from "react-i18next";
import '../../i18n';

const JoinUsSection = () => {
    const { t } = useTranslation();

    return (
        <section className="join-us-section-wrap">
            <div className="section-title">
                <SectionTitleText>
                    {t("join_us_section_title")}
                </SectionTitleText>
            </div>

            <div className="join-us-section-container">
                <div className="join-us-section-container--left">
                    <div className="card-item-one">
                        <div className="card-info-one">
                            <h4 className='card-info-title'>{t("larger_card.title")}</h4>
                            <div className="card-divider" />
                            <p className="card-description">{t("larger_card.text")}</p>
                        </div>
                    </div>
                </div>

                <div className="join-us-section-container--right">
                    <div className="card-item-two">
                        <div className="card-info-two">
                            <h4 className='card-info-title'>{t("top_card.title")}</h4>
                            <div className="card-divider" />
                            <p className="card-description">{t("top_card.text")}</p>
                        </div>
                    </div>

                    <div className="card-item-three">
                        <div className="card-info-two">
                            <h4 className='card-info-title'>{t("bottom_card.title")}</h4>
                            <div className="card-divider" />
                            <p className="card-description">{t("bottom_card.text")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default JoinUsSection;
