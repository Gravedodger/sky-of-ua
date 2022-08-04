import React from "react";
import "./CurrentProjectsSection.css";
import { SectionTitleText } from "../../Typography";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ProjectCard from "../../components/ProjectCard";
import dataCurrentProjects from "./dataCurrentProjects";
import { useTranslation } from "react-i18next";
import "../../i18n";

const CurrentProjectsSection = ({ sectionTitle, dataFileName }) => {
  const { t } = useTranslation();
  const handleDragStart = (e) => e.preventDefault();

  const responsive = {
    0: {
      items: 1,
    },
    738: {
      items: 2,
    },
    1280: {
      items: 3,
    },
  };

  const items = dataCurrentProjects.map((item) => {
    const { id, src } = item;

    return (
      <div key={id} className="current-projects-card-wrap">
        <ProjectCard
          projectCardImage={src}
          projectCardImageAltText={t(`${id}.img_Alt`)}
          projectCardTitle={t(`${id}.title`)}
          projectCardText={t(`${id}.text`)}
          buttonText={t("support")}
          onDragStart={handleDragStart}
          role="presentation"
        />
      </div>
    )
  });

  return (
    <section className="current-projects-section-wrap">
      <div className="section-title">
        <SectionTitleText>{t("cur_proj_section_title")}</SectionTitleText>
      </div>

      <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        autoPlayInterval={1400}
        infinite={true}
        responsive={responsive}
        disableButtonsControls
      />
    </section>
  )
};

export default CurrentProjectsSection;
