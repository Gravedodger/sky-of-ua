import React from "react";
import "./ProjectPartners.css";
import partnerImage from "../../assets/images/project-partner.jpg";

const ProjectPartners = () => {
  return (
    <div className="project-partners-wrap">
      <h3 className="project-partners-title">Партнери та учасники</h3>
      <div className="project-partners-content">
        <img
          src={partnerImage}
          alt="project partner"
          className="project-partners-image"
        />
        <div className="project-partners-sub">
          <h4 className="project-partners-name">Таблеточкка</h4>
          <p className="project-partners-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Pellentesque accumsan velit vitae ligula tristique viverra. Ut
            blandit aliquet mollis.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPartners;
