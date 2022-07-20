import React from "react";
import { Helmet } from "react-helmet";
import AboutUsSection from "../../sections/AboutUs-section";
import ReportsSection from "../../sections/Reports-section";
import { useTranslation } from "react-i18next";
import '../../i18n';

const AboutUsPage = () => {
    const { t } = useTranslation();

    return (
        <>
          <Helmet>
            <title>{t("site_name")} || {t("nav_about_us")}</title>
            <meta name="description" content="" />
            <meta name="keywords" content="Ukraine, war, charity, help" />
          </Helmet>

          <main>
            <div className="main-container">
              <AboutUsSection />
              <ReportsSection />
            </div>
          </main>
        </>
    )
}

export default AboutUsPage;
