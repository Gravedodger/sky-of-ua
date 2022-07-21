import React from 'react';
import './ProjectCard.css';
import { Button, ButtonText, ProjectCardText, ProjectCardTitle } from "../../Typography";

const ProjectCard = ({projectCardImage, projectCardImageAltText, projectCardTitle, projectCardText, buttonText}) => {
    return (
        <div className="project-card-container">
            <div className="project-card-img">
                <img src={projectCardImage} alt={projectCardImageAltText} className="project-card-pic"/>
            </div>

            <div className="project-card-info">
                <ProjectCardTitle>{projectCardTitle}</ProjectCardTitle>
                <ProjectCardText>{projectCardText}</ProjectCardText>
            </div>

            <Button>
                <ButtonText>{buttonText}</ButtonText>
            </Button>
        </div>
    )
}

export default ProjectCard;
