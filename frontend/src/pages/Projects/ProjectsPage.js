import React from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import { useParams, Outlet } from "react-router-dom";
import MapUkraine from "../../sections/MapUkraine-section/MapUkraine";
import CurrentProjectsSection from "../../sections/CurrentProjects-section";
import dataHumanitarianAid from "../../sections/CurrentProjects-section/dataHumanitarianAid";
import dataMediaclAid from "../../sections/CurrentProjects-section/dataMedicalAid";
import dataMilitaryAid from "../../sections/CurrentProjects-section/dataMilitaryAid";
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
          {!regionId && <MapUkraine />}
          <Outlet />
          <CurrentProjectsSection
            sectionTitle={"hum_proj_section_title"}
            dataFileName={dataHumanitarianAid}
          />
          <CurrentProjectsSection
            sectionTitle={"med_proj_section_title"}
            dataFileName={dataMediaclAid}
          />
          <CurrentProjectsSection
            sectionTitle={"mil_proj_section_title"}
            dataFileName={dataMilitaryAid}
          />
        </div>
      </main>
    </>
  );
};

export default ProjectsPage;
