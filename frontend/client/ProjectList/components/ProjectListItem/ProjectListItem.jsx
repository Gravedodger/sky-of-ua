import React from 'react';
import './ProjectListItem.scss';

const ProjectListItem = ({text, status, removeProject, toggleProjectStatus}) => {
  const statusClassName = (status === "done") ? "completed" : "";

  return (
    <li className={`task ${statusClassName}`}>
      <input type="checkbox" onChange={toggleProjectStatus} className="task-status-change" />
      {text}
      <button className="task-remove" onClick={removeProject}>
        <i className="fa fa-trash" />
      </button>
    </li>
  );
};

export default ProjectListItem;
