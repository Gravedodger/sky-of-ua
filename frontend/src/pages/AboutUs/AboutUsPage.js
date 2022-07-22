import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "../../i18n";
import AboutUsSection from "../../sections/AboutUs-section";
import OurTeamSection from "../../sections/OurTeam-section";
import PartnersSection from "../../sections/Partners-section/PartnersSection";
import ReportsSection from "../../sections/Reports-section";
import CurrentProjectsSection from "../../sections/CurrentProjects-section";
import HelpSection from "../../sections/Help-section";

const AboutUsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>
          {t("site_name")} || {t("nav_about_us")}
        </title>
        <meta name="description" content="" />
        <meta name="keywords" content="Ukraine, war, charity, help" />
      </Helmet>

      <main>
        <div className="main-container" id="section-1">
          <AboutUsSection />
          <OurTeamSection />
          <PartnersSection />
          <HelpSection />
          <CurrentProjectsSection />
          <ReportsSection />
        </div>
      </main>
    </>
  );
};

export default AboutUsPage;
