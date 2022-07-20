import React from "react";
import { Helmet } from "react-helmet";
import { SectionTitleText } from "../../Typography";

const ProjectsPage = () => {
  return (
      <>
          <Helmet>
              <title>Sky of UA || Проекти</title>
              <meta name="description" content=""/>
              <meta name="keywords" content="Ukraine, war, charity, projects"/>
          </Helmet>

          <main>
              <div className="main-container">
                  <SectionTitleText>Welcome to the Projects Page!</SectionTitleText>
              </div>
          </main>
      </>
  )
}

export default ProjectsPage;
