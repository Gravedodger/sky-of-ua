import React from "react";
import "./ProjectDescription.css";

const ProjectDescriptionSection = ({ description, image, alt }) => {
  return (
    <div className="project-description-card-wrap">
      <h3 className="project-description-card-title">Опис</h3>
      <p className="project-description-card-text">{description}</p>
      <img
        className="project-description-card-image"
        src={image}
        alt={alt}
      ></img>
    </div>
  );
};

export default ProjectDescriptionSection;
