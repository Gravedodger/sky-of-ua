import React from "react";
import "./ProjectCard.css";
import FundraisingProgress from "../FundraisingProgress";

const ProjectCard = ({
  projectCardImage,
  projectCardImageAltText,
  projectCardTitle,
  projectCardText,
  buttonText,
}) => {
  return (
    <>
      <img
        src={projectCardImage}
        alt={projectCardImageAltText}
        className="project-card-image"
      />
      <h3 className="project-card-title">{projectCardTitle}</h3>
      <p className="project-card-text">{projectCardText}</p>
      <FundraisingProgress targetSum={35000.0} collectedSum={27000.0} />
      <button className="btn">
        <p className="btn-text">{buttonText}</p>
      </button>
    </>
  );
};

export default ProjectCard;
