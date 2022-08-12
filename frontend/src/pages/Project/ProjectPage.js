import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "../../i18n";

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

      <main>
        <div className="main-container"></div>
      </main>
    </>
  );
};

export default ProjectPage;
