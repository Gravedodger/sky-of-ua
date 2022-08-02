import React from "react";
import './ProjectsPage.css';
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import Projects from "../../sections/Projects-onPage/Projects";
import MapUkraine from "../../sections/MapUkraine-section/MapUkraine";
import "../../i18n";
import {SectionTitleText} from "../../Typography";

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
              <section className="project-page-section">
                  <MapUkraine />
              </section>

              <section className="project-page-section">
                  <div className="section-title">
                      <SectionTitleText>{t("humanitarian_assistance")}</SectionTitleText>
                  </div>

                  <Projects />
              </section>

              <section className="project-page-section">
                  <div className="section-title">
                      <SectionTitleText>{t("help_for_medics")}</SectionTitleText>
                  </div>

                  <Projects />
              </section>

              <section className="project-page-section">
                  <div className="section-title">
                      <SectionTitleText>{t("help_for_military")}</SectionTitleText>
                  </div>

                  <Projects />
              </section>
          </main>
      </>
  )
};

export default ProjectsPage;
