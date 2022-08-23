import React from "react";
import "./HeroProject.css";
import projectPhoto from "../../assets/images/project-image.jpg";

const HeroProject = ({ title, text, value }) => {
  return (
    <div className="project-image-wrap">
      <img src={projectPhoto} alt="project" className="project-image" />
      <div className="project-image-description-wrap">
        <h2 className="project-image-description-title">{title}</h2>
        <p className="project-image-description-text">{text}</p>
        <span className="project-image-description-currency">&#8372; </span>
        <p className="project-image-description-value">{value}</p>
      </div>
    </div>
  );
};

export default HeroProject;
