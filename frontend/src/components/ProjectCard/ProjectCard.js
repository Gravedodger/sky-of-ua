import React from "react";
import "./ProjectCard.css";
import {
  Button,
  ButtonText,
  ProjectCardText,
  ProjectCardTitle,
} from "../../Typography";
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
      <ProjectCardTitle>{projectCardTitle}</ProjectCardTitle>
      <ProjectCardText>{projectCardText}</ProjectCardText>
        <FundraisingProgress />
      <Button>
        <ButtonText>{buttonText}</ButtonText>
      </Button>
    </>
  );
};

export default ProjectCard;
