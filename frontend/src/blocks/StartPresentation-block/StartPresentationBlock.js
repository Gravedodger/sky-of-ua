import React from "react";
import "./StartPresentationBlock.css";
import { useTranslation } from "react-i18next";
import "../../i18n";
import { ButtonRequestSupport, ButtonTakePart } from "../../components/Buttons";
import { ButtonText } from "../../Typography";

const StartPresentationBlock = ({ setModalActive }) => {
  const { t } = useTranslation();

  return (
    <div className="start-presentation">
      <div className="start-presentation-info">
        <h1 className="start-presentation-title">
          {t("start_presentation.title")}
        </h1>
        <p className="start-presentation-description">
          {t("start_presentation.description")}
        </p>
      </div>
      <div className="start-presentation-btn-container">
        <div className="start-presentation-button-request">
          <ButtonRequestSupport setModalActive={setModalActive} />
        </div>
        <div className="start-presentation-button-take-part">
          <ButtonTakePart />
        </div>
      </div>
    </div>
  );
};

export default StartPresentationBlock;
