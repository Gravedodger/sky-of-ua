import React from 'react';
import './ProjectsListPage.scss';
import ProjectList from "../../client/ProjectList/components/ProjectList";

const ProjectsListPage = () => {
  return (
    <div>
      <h1>PROJECTS:</h1>
      <ProjectList />
    </div>
  );
};

export default ProjectsListPage;
