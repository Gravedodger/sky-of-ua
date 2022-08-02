import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import MapUkraine from "../../sections/MapUkraine-section/MapUkraine";
import "../../i18n";

const ProjectsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <title>
          {t("site_name")} || {t("nav_projects")}
        </title>
        <meta name="description" content="" />
        <meta name="keywords" content="Ukraine, war, charity, projects" />
      </Helmet>

      <main>
        <div className="main-container">
          <MapUkraine />
        </div>
      </main>
    </>
  );
};

export default ProjectsPage;
