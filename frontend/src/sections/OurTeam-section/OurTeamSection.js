import React from "react";
import "./OurTeamSection.css";
import peopleHiking from "../../assets/images/people-hiking.png";
import { useTranslation } from "react-i18next";
import "../../i18n";

const OurTeamSection = () => {
  const { t } = useTranslation();

  return (
    <section className="our-team-section-wrap">
      <div className="section-title">
        <h3 className="section-title-text">{t("our_team_section.section_title")}</h3>
      </div>

      <div className="our-team-section-container">
        <img
          src={peopleHiking}
          alt={t("our_team_section.img_Alt")}
          className="our-team-img"
        />
        <h4 className="our-team-description-title">
          {t("our_team_section.title")}
        </h4>
        <p className="our-team-description-text">
          {t("our_team_section.text")}
        </p>
      </div>
    </section>
  )
};

export default OurTeamSection;
