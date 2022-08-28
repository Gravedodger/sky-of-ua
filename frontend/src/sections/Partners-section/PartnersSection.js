import React from "react";
import "./PartnersSection.css";
import PartnersCard from "../../components/PartnersCard";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { useTranslation } from "react-i18next";
import "../../i18n";

import childrenOfHeroes from "../../assets/images/children-of-heroes.png";
import supportUkrainians from "../../assets/images/support-ukrainians.png";
import Tabletochki from "../../assets/images/tabletochki.png";

const PartnersSection = () => {
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
    <div className="partners-card-wrap">
      <PartnersCard
        className="item"
        partnerImage={childrenOfHeroes}
        partnerImageAlt={t("partners_slider_1.img_Alt")}
        partnerTitle={t("partners_slider_1.title")}
        partnerDescription={t("partners_slider_1.text")}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,

    <div className="partners-card-wrap">
      <PartnersCard
        className="item"
        partnerImage={supportUkrainians}
        partnerImageAlt={t("partners_slider_2.img_Alt")}
        partnerTitle={t("partners_slider_2.title")}
        partnerDescription={t("partners_slider_2.text")}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,

    <div className="partners-card-wrap">
      <PartnersCard
        className="item"
        partnerImage={Tabletochki}
        partnerImageAlt={t("partners_slider_3.img_Alt")}
        partnerTitle={t("partners_slider_3.title")}
        partnerDescription={t("partners_slider_3.text")}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,

    <div className="partners-card-wrap">
      <PartnersCard
        className="item"
        partnerImage={childrenOfHeroes}
        partnerImageAlt={t("partners_slider_1.img_Alt")}
        partnerTitle={t("partners_slider_1.title")}
        partnerDescription={t("partners_slider_1.text")}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,

    <div className="partners-card-wrap">
      <PartnersCard
        className="item"
        partnerImage={supportUkrainians}
        partnerImageAlt={t("partners_slider_2.img_Alt")}
        partnerTitle={t("partners_slider_2.title")}
        partnerDescription={t("partners_slider_2.text")}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,

    <div className="partners-card-wrap">
      <PartnersCard
        className="item"
        partnerImage={Tabletochki}
        partnerImageAlt={t("partners_slider_3.img_Alt")}
        partnerTitle={t("partners_slider_3.title")}
        partnerDescription={t("partners_slider_3.text")}
        onDragStart={handleDragStart}
        role="presentation"
      />
    </div>,
  ];

  return (
    <section className="partners-section-wrap">
      <div className="section-title">
        <h3 className="section-title-text">{t("partners_section_title")}</h3>
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

export default PartnersSection;
