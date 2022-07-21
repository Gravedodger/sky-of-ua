import React from "react";
import "./OurTeamSection.css";
import { SectionTitleText } from "../../Typography";
import peopleHiking from "../../assets/images/people-hiking.png";
import { useTranslation } from "react-i18next";
import "../../i18n";

const OurTeamSection = () => {
  const { t } = useTranslation();

  return (
    <section className="our-team-section-wrap">
      <div className="section-title">
        <SectionTitleText>
          {t("our_team_section.section_title")}
        </SectionTitleText>
      </div>

      <div className="our-team-section-container">
        <div className="our-team-img">
          <img src={peopleHiking} alt={t("our_team_section.img_Alt")} />
        </div>
        <div className="our-team-description">
          <h4 className="our-team-description-title">
            {t("our_team_section.title")}
          </h4>
          <p className="our-team-description-text">
            {t("our_team_section.text")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurTeamSection;
