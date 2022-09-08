import React from "react";
import "./ProjectCard.css";
import FundraisingProgress from "../FundraisingProgress";

const ProjectCard = ({
  projectCardImage,
  projectCardImageAltText,
  projectCardTitle,
  projectCardText,
  buttonText,
  targetSum,
  collectedSum,
}) => {
  return (
    <>
      <img
        src={projectCardImage}
        alt={projectCardImageAltText}
        className="project-card-image"
      />
      <div className="project-card-context-wrap">
        <h3 className="project-card-title">{projectCardTitle}</h3>
        <p className="project-card-text">{projectCardText}</p>
        <FundraisingProgress
          targetSum={targetSum}
          collectedSum={collectedSum}
        />
        <button className="btn">
          <p className="btn-text">{buttonText}</p>
        </button>
      </div>
    </>
  );
};

export default ProjectCard;
