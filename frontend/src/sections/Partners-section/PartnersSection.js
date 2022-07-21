import React from "react";
import "./PartnersSection.css";
import { SectionTitleText } from "../../Typography";
import PartnersSectionBlock from "../../blocks/PartnersSection-block";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useTranslation } from "react-i18next";
import "../../i18n";

import childrenOfHeroes from "../../assets/images/children-of-heroes.png";
import supportUkrainians from "../../assets/images/support-ukrainians.png";
import Tabletochki from "../../assets/images/tabletochki.png";

const PartnersSection = () => {
  const { t } = useTranslation();

  return (
    <section>
      <div className="section-title">
        <SectionTitleText>{t("partners_section_title")}</SectionTitleText>
      </div>

      <Carousel autoPlay>
        <div className="partners-section-wrap">
          <PartnersSectionBlock
            partnerImage={childrenOfHeroes}
            partnerImageAlt={t("partners_slider_1.img_Alt")}
            partnerTitle={t("partners_slider_1.title")}
            partnerDescription={t("partners_slider_1.text")}
          />

          <PartnersSectionBlock
            partnerImage={supportUkrainians}
            partnerImageAlt={t("partners_slider_2.img_Alt")}
            partnerTitle={t("partners_slider_2.title")}
            partnerDescription={t("partners_slider_2.text")}
          />

          <PartnersSectionBlock
            partnerImage={Tabletochki}
            partnerImageAlt={t("partners_slider_3.img_Alt")}
            partnerTitle={t("partners_slider_3.title")}
            partnerDescription={t("partners_slider_3.text")}
          />
        </div>

        <div className="partners-section-wrap">
          <PartnersSectionBlock
            partnerImage={childrenOfHeroes}
            partnerImageAlt={t("partners_slider_1.img_Alt")}
            partnerTitle={t("partners_slider_1.title")}
            partnerDescription={t("partners_slider_1.text")}
          />

          <PartnersSectionBlock
            partnerImage={supportUkrainians}
            partnerImageAlt={t("partners_slider_2.img_Alt")}
            partnerTitle={t("partners_slider_2.title")}
            partnerDescription={t("partners_slider_2.text")}
          />

          <PartnersSectionBlock
            partnerImage={Tabletochki}
            partnerImageAlt={t("partners_slider_3.img_Alt")}
            partnerTitle={t("partners_slider_3.title")}
            partnerDescription={t("partners_slider_3.text")}
          />
        </div>
      </Carousel>
    </section>
  );
};

export default PartnersSection;
