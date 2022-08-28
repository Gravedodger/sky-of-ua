import React from "react";
import "./ProjectDescription.css";
import { useTranslation } from "react-i18next";
import '../../i18n';

const ProjectDescriptionSection = ({ description, image, alt }) => {
  const { t } = useTranslation();

  return (
    <div className="project-description-card-wrap">
      <h3 className="project-description-card-title">{t("description")}</h3>
      <p className="project-description-card-text">{description}</p>
      <img
        className="project-description-card-image"
        src={image}
        alt={alt}
      />
    </div>
  )
}

export default ProjectDescriptionSection;
