import React from "react";
import { useParams } from "react-router-dom";
import MediaQuery from "react-responsive";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import MapUkraine from "../../sections/MapUkraine-section";
import RegionInfoSection from "../../sections/RegionInfo-section";
import dataHumanitarianAid from "../../sections/CurrentProjects-section/dataHumanitarianAid";
import dataMediacalAid from "../../sections/CurrentProjects-section/dataMedicalAid";
import dataMilitaryAid from "../../sections/CurrentProjects-section/dataMedicalAid";
import CurrentProjectsSection from "../../sections/CurrentProjects-section";

import "../../i18n";

const ProjectsPage = () => {
  const { t } = useTranslation();
  const { id } = useParams();

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
          {(!id && (
            <MediaQuery minWidth={768}>
              <MapUkraine />
            </MediaQuery>
          )) || <RegionInfoSection id={id} />}

          <CurrentProjectsSection
            sectionTitle={"hum_proj_section_title"}
            dataFileName={dataHumanitarianAid}
          />
          <CurrentProjectsSection
            sectionTitle={"med_proj_section_title"}
            dataFileName={dataMediacalAid}
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
