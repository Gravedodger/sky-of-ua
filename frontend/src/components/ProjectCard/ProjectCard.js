import React from "react";
import "./ProjectCard.css";
import {
  Button,
  ButtonText,
  ProjectCardText,
  ProjectCardTitle,
} from "../../Typography";

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
      <ProjectCardTitle>{projectCardTitle}</ProjectCardTitle>
      <ProjectCardText>{projectCardText}</ProjectCardText>
      <Button>
        <ButtonText>{buttonText}</ButtonText>
      </Button>
    </>
  );
};

export default ProjectCard;
