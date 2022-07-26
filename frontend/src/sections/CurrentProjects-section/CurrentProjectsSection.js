import React from "react";
import "./CurrentProjectsSection.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ProjectCard from "../../components/ProjectCard";
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

  const items = dataFileName.map((item) => {
    const {
      id,
      src,
      fundraisingProgress = { targetSum: 35000.0, collectedSum: 15000.0 },
    } = item;
    const { targetSum, collectedSum } = fundraisingProgress;
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
          targetSum={targetSum}
          collectedSum={collectedSum}
        />
      </div>
    );
  });

  return (
    <section className="current-projects-section-wrap">
      <div className="section-title">
        <h3 className="section-title-text">{t(sectionTitle)}</h3>
      </div>

      <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        autoPlayInterval={2000}
        infinite={true}
        responsive={responsive}
        disableButtonsControls
      />
    </section>
  );
};

export default CurrentProjectsSection;
