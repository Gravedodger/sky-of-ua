import React from "react";
import "./HelpSection.css";
import { SectionTitleText } from "../../Typography";
import { ButtonRequestSupport, ButtonTakePart } from "../../components/Buttons";
import { useTranslation } from "react-i18next";
import "../../i18n";

import MilitaryExercise from "../../assets/images/military-photo.png";
import PlasticForms from "../../assets/images/plastic-forms.png";
import HoldingHand from "../../assets/images/sick-child.png";

const HelpSection = ({ setModalActive }) => {
  const { t } = useTranslation();

  return (
    <section className="help-section-wrap">
      <div className="section-title">
        <SectionTitleText>{t("help_section_title")}</SectionTitleText>
      </div>

      <div className="help-section-content">
        <div className="help-section-images">
          <img
            src={MilitaryExercise}
            alt={t("help_section.img_1_Alt")}
            className="help-pic-1"
          />
          <div className="help-section-images-additional">
            <img
              src={PlasticForms}
              alt={t("help_section.img_2_Alt")}
              className="help-pic-2"
            />
            <img
              src={HoldingHand}
              alt={t("help_section.img_3_Alt")}
              className="help-pic-3"
            />
          </div>
        </div>

        <div className="help-section-text">
          <SectionTitleText className="help-section-title">
            {t("help_section.title")}
          </SectionTitleText>

          <p className="help-section-description">
            {t("help_section.description")}
          </p>

          <ul className="help-section-links">
            <li className="help-section-item">
              <a href="#" className="help-label-humanitarian">
                {t("help_section.label_top")}
              </a>
            </li>
            <li className="help-section-item">
              <a href="#" className="help-label-medical">
                {t("help_section.label_middle")}
              </a>
            </li>
            <li className="help-section-item">
              <a href="#" className="help-label-military">
                {t("help_section.label_bottom")}
              </a>
            </li>
          </ul>

          <div className="help-section-buttons-container">
            <div className="help-us-button-support-wrap">
              <ButtonRequestSupport setModalActive={setModalActive} />
            </div>
            <div className="help-us-button-take-part-wrap">
              <ButtonTakePart />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
};

export default HelpSection;
