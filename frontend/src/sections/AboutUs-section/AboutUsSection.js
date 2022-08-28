import React from "react";
import "./AboutUsSection.css";
import AboutUsBlock from "../../components/AboutUs-block";
import { useTranslation } from "react-i18next";
import "../../i18n";

const AboutUsSection = () => {
  const { t } = useTranslation();

  return (
    <>
      <section className="about-us-section-wrap">
        <div className="section-title">
          <h3 className="section-title-text">{t("about_us_section_title")}</h3>
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
