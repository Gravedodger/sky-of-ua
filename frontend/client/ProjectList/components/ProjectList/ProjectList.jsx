import React from 'react';
import './ProjectList.scss';
import ProjectListItem from "../ProjectListItem";

const ProjectList = ({list, removeProject, toggleProjectStatus}) => {
  const listElements = list.map(({_id, ...projectProps}, index) => <ProjectListItem key={_id}
        {...projectProps}
        removeProject={() => removeProject(_id, index)}
        toggleProjectStatus={()=> toggleProjectStatus(index)} />);

  return (
    <div>
      <ul className="tasker-list">
        {listElements}
      </ul>
    </div>
  );
};

export default ProjectList;
