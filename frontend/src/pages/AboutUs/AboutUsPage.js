import React from "react";
import MediaQuery from "react-responsive";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "../../i18n";
import HeroVideo from "../../components/HeroVideo";
import AboutUsSection from "../../sections/AboutUs-section";
import OurTeamSection from "../../sections/OurTeam-section";
import PartnersSection from "../../sections/Partners-section/PartnersSection";
import ReportsSection from "../../sections/Reports-section";
import dataCurrentProjects from "../../sections/CurrentProjects-section/dataCurrentProjects";
import CurrentProjectsSection from "../../sections/CurrentProjects-section";
import HelpSection from "../../sections/Help-section";
import JoinUsSection from "../../sections/JoinUs-section";

const AboutUsPage = ({ setModalActive }) => {
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
      <MediaQuery minWidth={768}>
        <HeroVideo setModalActive={setModalActive} />
      </MediaQuery>
      <main>
        <div className="main-container" id="section-1">
          <AboutUsSection />
          <OurTeamSection />
          <PartnersSection />
          <HelpSection setModalActive={setModalActive} />
          <JoinUsSection />
          <CurrentProjectsSection
            sectionTitle={"cur_proj_section_title"}
            dataFileName={dataCurrentProjects}
          />
          <ReportsSection />
        </div>
      </main>
    </>
  );
};

export default AboutUsPage;
