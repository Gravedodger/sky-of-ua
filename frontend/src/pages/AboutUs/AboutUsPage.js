import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "../../i18n";
import AboutUsSection from "../../sections/AboutUs-section";
import OurTeamSection from "../../sections/OurTeam-section";
import PartnersSection from "../../sections/Partners-section/PartnersSection";
import ReportsSection from "../../sections/Reports-section";
import CurrentProjectsSection from "../../sections/CurrentProjects-section";
import StarterHeader from "../../components/StarterHeader/StarterHeader";

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
        <StarterHeader />
      <main>
        <div className="main-container">
          <AboutUsSection />
          <OurTeamSection />
          <PartnersSection />
          <CurrentProjectsSection />
          <ReportsSection />
        </div>
      </main>
    </>
  );
};

export default AboutUsPage;
