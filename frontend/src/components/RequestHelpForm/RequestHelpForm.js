import React from "react";
import "./RequestHelpForm.css";
import { ButtonSubmit } from "../Buttons";
import { useTranslation } from "react-i18next";

const RequestHelpForm = () => {
  const { t } = useTranslation();
  return (
    <>
      <h4 className="request-help-title">{t("modal_title")}</h4>
      <form id="modalRequestHelp" className="request-help-form">
        <label htmlFor="name" className="request-help-label">
          {t("modal_form.name")}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder={t("modal_form.name_placeholder")}
          className="request-help-input"
        ></input>

        <label htmlFor="phone" className="request-help-label">
          {t("modal_form.phone")}
        </label>
        <input
          id="phone"
          name="phone"
          type="phone"
          placeholder={t("modal_form.phone_placeholder")}
          className="request-help-input"
        ></input>

        <label htmlFor="email" className="request-help-label">
          {t("modal_form.email")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder={t("modal_form.email_placeholder")}
          className="request-help-input"
        ></input>

        <label htmlFor="type-of-help" className="request-help-label">
          {t("modal_form.type_of_help")}
        </label>
        <select
          id="type-of-help"
          name="select"
          selected
          className="request-help-input"
        >
          <option
            value="type_of_help_placeholder"
            className="type_of_help_placeholder"
          >
            {t("modal_form.type_of_help_placeholder")}
          </option>
          <option value="hum_help">{t("modal_form.option_1")}</option>
          <option value="medic_help">{t("modal_form.option_2")}</option>
          <option value="military_help">{t("modal_form.option_3")}</option>
        </select>

        <label htmlFor="comment" className="request-help-label">
          {t("modal_form.comment")}
        </label>
        <textarea
          id="comment"
          placeholder={t("modal_form.comment_placeholder")}
          className="request-help-input"
        ></textarea>
        <ButtonSubmit />
      </form>
    </>
  );
};

export default RequestHelpForm;
