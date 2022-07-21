import React from "react";
import "./CurrentProjectsSection.css";
import { SectionTitleText } from "../../Typography";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ProjectCard from "../../components/ProjectCard";
import BottleOfWater from "../../assets/images/bottle-of-water.png";
import { useTranslation } from "react-i18next";
import "../../i18n";

const CurrentProjectsSection = () => {
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

  const items = [
    <div className="current-projects-card-wrap">
      <ProjectCard
        projectCardImage={BottleOfWater}
        projectCardImageAltText={t("project_card_common.imgAlt")}
        projectCardTitle={t("project_card_common.title")}
        projectCardText={t("project_card_common.text")}
        buttonText={t("support")}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="current-projects-card-wrap">
      <ProjectCard
        projectCardImage={BottleOfWater}
        projectCardImageAltText={t("project_card_common.imgAlt")}
        projectCardTitle={t("project_card_common.title")}
        projectCardText={t("project_card_common.text")}
        buttonText={t("support")}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="current-projects-card-wrap">
      <ProjectCard
        projectCardImage={BottleOfWater}
        projectCardImageAltText={t("project_card_common.imgAlt")}
        projectCardTitle={t("project_card_common.title")}
        projectCardText={t("project_card_common.text")}
        buttonText={t("support")}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="current-projects-card-wrap">
      <ProjectCard
        projectCardImage={BottleOfWater}
        projectCardImageAltText={t("project_card_common.imgAlt")}
        projectCardTitle={t("project_card_common.title")}
        projectCardText={t("project_card_common.text")}
        buttonText={t("support")}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="current-projects-card-wrap">
      <ProjectCard
        projectCardImage={BottleOfWater}
        projectCardImageAltText={t("project_card_common.imgAlt")}
        projectCardTitle={t("project_card_common.title")}
        projectCardText={t("project_card_common.text")}
        buttonText={t("support")}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
    <div className="current-projects-card-wrap">
      <ProjectCard
        projectCardImage={BottleOfWater}
        projectCardImageAltText={t("project_card_common.imgAlt")}
        projectCardTitle={t("project_card_common.title")}
        projectCardText={t("project_card_common.text")}
        buttonText={t("support")}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
  ];

  return (
    <section className="current-projects-section-wrap">
      <div className="section-title">
        <SectionTitleText>
          {t("current_projects_section_title")}
        </SectionTitleText>
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
  );
};

export default CurrentProjectsSection;
