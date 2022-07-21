import React from 'react';
import './AboutUsSection.css';
import { SectionTitleBar, SectionTitleText } from "../../Typography";
import AboutUsBlock from "../../blocks/AboutUs-block";
import { useTranslation } from "react-i18next";
import "../../i18n";

const AboutUsSection = () => {
    const { t } = useTranslation();

    return (
        <section>
            <div className="section-title">
                <SectionTitleBar />
                <SectionTitleText>{t("about_us_section_title")}</SectionTitleText>
            </div>

            <div className="section-wrap">
                <AboutUsBlock
                    aboutUsBlockTitle={t("about_us_1.title")}
                    aboutUsBlockText={t("about_us_1.text")}
                />
                <div className="vertical-line" />
                <AboutUsBlock
                    aboutUsBlockTitle={t("about_us_2.title")}
                    aboutUsBlockText={t("about_us_2.text")}
                />
                <div className="vertical-line" />
                <AboutUsBlock
                    aboutUsBlockTitle={t("about_us_3.title")}
                    aboutUsBlockText={t("about_us_3.text")}
                />
            </div>
        </section>
    )
}

export default AboutUsSection;
