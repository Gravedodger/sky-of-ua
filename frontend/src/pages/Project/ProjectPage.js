import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "../../i18n";
import HeroProject from "../../components/HeroProject";

const ProjectPage = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* <Helmet>
        <meta name="description" content={t("meta_projects.description")} />
        <meta name="keywords" content={t("meta_projects.keywords")} />
        <title>
          {t("site_name")} || {t("nav_projects")}
        </title>
      </Helmet> */}

      <HeroProject />
      <main>
        <div className="main-container">
          <h1> PROJECT CONTENT</h1>
        </div>
      </main>
    </>
  );
};

export default ProjectPage;
