import React from "react";
import "./Buttons.css";
import { useTranslation } from "react-i18next";
import "../../i18n";

const ButtonRequestSupport = ({ setModalActive }) => {
  const { t } = useTranslation();
  return (
    <button
      className="button-request-support"
      onClick={() => setModalActive(true)}
    >
      <p className="btn-text">{t("btn_request_support")}</p>
    </button>
  );
};

const ButtonTakePart = () => {
  const { t } = useTranslation();
  return (
    <a href="/projects">
      <button className="button-take-part">
        <p className="btn-text button-take-part-text">
          {t("btn_take_part")}
        </p>
      </button>
    </a>
  );
};

const ButtonSubmit = () => {
  const { t } = useTranslation();
  return (
    <button type="submit" className="button-submit">
      <p className="btn-text button-submit-text">{t("btn_modal")}</p>
    </button>
  );
};

const ButtonToSupport = () => {
  const { t } = useTranslation();
  return (
    <button type="submit" className="button-to-support">
      <p className="btn-text button-to-support-text">
        {t("btn_to_support")}
      </p>
    </button>
  );
};

export { ButtonRequestSupport, ButtonTakePart, ButtonSubmit, ButtonToSupport };
