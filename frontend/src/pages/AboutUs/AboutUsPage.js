import React from "react";
import { Helmet } from "react-helmet";
import AboutUsSection from "../../sections/AboutUs-section";
import ReportsSection from "../../sections/Reports-section";
import { useTranslation } from "react-i18next";
import "../../i18n";
import OurTeamSection from "../../sections/OurTeam-section";
import PartnersSection from "../../sections/Partners-section";
import CurrentProjectsSection from "../../sections/CurrentProjects-section";

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

<<<<<<< HEAD
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
    )
}
=======
      <main>
        <div className="main-container">
          <AboutUsSection />
          <OurTeamSection />
          <PartnersSection />
          <ReportsSection />
        </div>
      </main>
    </>
  );
};
>>>>>>> 43f9a9b5076172ea6e377fc36925f9764c30e470

export default AboutUsPage;
