import React from "react";
import "./HeroProject.css";
import projectPhoto from "../../assets/images/project-image.jpg";

const HeroProject = () => {
  // компонент має приймати з пропсів чи зі стору наступні дані
  const projectTitle =
    "Потрібно зібрати кошти на допомогу нашим медикам в Миколаївські області";
  const projectText = "Зараз ми збераємо на першо чергові потреби. Залишилось:";
  const projectValue = "4,518.50";

  return (
    <div className="project-image-wrap">
      <img src={projectPhoto} alt="" className="project-image" />
      <h2 className="project-title">{projectTitle}</h2>
      <p className="project-text">{projectText}</p>
      <p className="project-value">{projectValue}</p>
    </div>
  );
};

export default HeroProject;
