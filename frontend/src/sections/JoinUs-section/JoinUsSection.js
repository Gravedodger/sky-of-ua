import React from "react";
import "./JoinUsSection.css";
import { SectionTitleText } from "../../Typography";
import { useTranslation } from "react-i18next";
import "../../i18n";

const JoinUsSection = () => {
  const { t } = useTranslation();

  return (
    <section className="join-us-section-wrap">
      <div className="section-title">
        <SectionTitleText>{t("join_us_section_title")}</SectionTitleText>
      </div>

      <div className="join-us-section-content">
        <div className="card-info-main">
          <div className="card-description">
            <h4 className="card-info-title">{t("larger_card.title")}</h4>
            <p className="card-info-text">{t("larger_card.text")}</p>
          </div>
        </div>
        <div className="card-info-add">
          <div className="card-info-top">
            <div className="card-description">
              <h4 className="card-info-title">{t("top_card.title")}</h4>
              <p className="card-info-text">{t("top_card.text")}</p>
            </div>
          </div>
          <div className="card-info-bottom">
            <div className="card-description">
              <h4 className="card-info-title">{t("bottom_card.title")}</h4>
              <p className="card-info-text">{t("bottom_card.text")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default JoinUsSection;
