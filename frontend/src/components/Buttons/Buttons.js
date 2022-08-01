import React from "react";
import "./Buttons.css";
import { ButtonText } from "../../Typography";
import { useTranslation } from "react-i18next";

import "../../i18n";

const ButtonRequestSupport = ({ setModalActive }) => {
  const { t } = useTranslation();
  return (
    <button
      className="button-request-support"
      onClick={() => setModalActive(true)}
    >
      <ButtonText>{t("request_support")}</ButtonText>
    </button>
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

const ButtonSubmit = () => {
  const { t } = useTranslation();
  return (
    <button type="submit" className="button-submit">
      <ButtonText className="button-submit-text">
        {t("modal_form.button")}
      </ButtonText>
    </button>
  );
};

export { ButtonRequestSupport, ButtonTakePart, ButtonSubmit };
