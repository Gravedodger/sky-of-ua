import React from "react";
import "./Buttons.css";
import { ButtonText } from "../../Typography";
import { useTranslation } from "react-i18next";

import "../../i18n";

const ButtonRequestSupport = () => {
  const { t } = useTranslation();
  return (
    <a href="/">
      <button className="button-request-support">
        <ButtonText>{t("request_support")}</ButtonText>
      </button>
    </a>
  );
};

const ButtonTakePart = () => {
  const { t } = useTranslation();
  return (
    <a href="/projects">
      <button className="button-take-part">
        <ButtonText className="button-take-part-text">
          {t("take_part")}
        </ButtonText>
      </button>
    </a>
  );
};

export { ButtonRequestSupport, ButtonTakePart };
