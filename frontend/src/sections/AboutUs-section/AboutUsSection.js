import React from "react";
import "./AboutUsSection.css";
import AboutUsBlock from "../../blocks/AboutUs-block";
import { SectionTitleText } from "../../Typography";
import { useTranslation } from "react-i18next";
import "../../i18n";

const AboutUsSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="about-us-section-wrap">
        <div className="section-title">
          <SectionTitleText>{t("about_us_section_title")}</SectionTitleText>
        </div>

        <ul className="about-us-content-wrap">
          <AboutUsBlock
            aboutUsBlockTitle={t("about_us_1.title")}
            aboutUsBlockText={t("about_us_1.text")}
          />
          <AboutUsBlock
            aboutUsBlockTitle={t("about_us_2.title")}
            aboutUsBlockText={t("about_us_2.text")}
          />
          <AboutUsBlock
            aboutUsBlockTitle={t("about_us_3.title")}
            aboutUsBlockText={t("about_us_3.text")}
          />
        </ul>
      </section>
    </>
  );
};

export default AboutUsSection;
