import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { useParams, Outlet } from "react-router-dom";
import MediaQuery from "react-responsive";
import MapUkraine from "../../sections/MapUkraine-section/MapUkraine";
import CurrentProjectsSection from "../../sections/CurrentProjects-section";
import dataHumanitarianAid from "../../sections/CurrentProjects-section/dataHumanitarianAid";
import { useTranslation } from "react-i18next";
import "../../i18n";

const ProjectsPage = () => {
  const { t } = useTranslation();
  const { regionId } = useParams();

  return (
    <>
      <Helmet>
        <meta name="description" content={t("meta_projects.description")} />
        <meta name="keywords" content={t("meta_projects.keywords")} />
        <title>
          {t("site_name")} || {t("nav_projects")}
        </title>
      </Helmet>

      <main>
        <div className="main-container">
          <MediaQuery minWidth={768}>
            {!regionId && <MapUkraine />}
            <Outlet />
          </MediaQuery>

          <CurrentProjectsSection
            sectionTitle={"hum_proj_section_title"}
            dataFileName={dataHumanitarianAid}
          />
        </div>
      </main>
    </>
  );
};

export default ProjectsPage;
