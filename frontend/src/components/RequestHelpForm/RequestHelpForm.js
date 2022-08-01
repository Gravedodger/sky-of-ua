import React, { useState, useEffect } from "react";
import "./RequestHelpForm.css";
import initialState from "./initialState";
import { ButtonSubmit } from "../Buttons";
import { useTranslation } from "react-i18next";

const RequestHelpForm = ({ setModalActive }) => {
  const { t } = useTranslation();
  const [form, setForm] = useState(initialState);

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, select } = form;
    if (
      !name ||
      !phone ||
      !email ||
      (select !== "hum_help" &&
        select !== "medic_help" &&
        select !== "military_help")
    )
      return alert(t("modal_form.alert_fail"));

    console.log(form);
    setForm({ ...initialState });
    setModalActive(false);
    return alert(t("modal_form.alert_success"));
  };

  return (
    <>
      <h4 className="request-help-title">{t("modal_title")}</h4>
      <form
        id="modalRequestHelp"
        className="request-help-form"
        onSubmit={handleSubmit}
      >
        <label htmlFor="name" className="request-help-label">
          {t("modal_form.name")}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder={t("modal_form.name_placeholder")}
          className="request-help-input"
          onChange={handleChange}
          value={form.name}
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
          onChange={handleChange}
          value={form.phone}
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
          onChange={handleChange}
          value={form.email}
        ></input>

        <label htmlFor="type-of-help" className="request-help-label">
          {t("modal_form.type_of_help")}
        </label>
        <select
          id="type-of-help"
          name="select"
          className="request-help-input"
          onChange={handleChange}
          value={form.select}
        >
          <option value="DEFAULT" className="type_of_help_placeholder" disabled>
            {t("modal_form.type_of_help_placeholder")}
          </option>
          <option value="hum_help">{t("modal_form.option_1")}</option>
          <option value="medic_help">{t("modal_form.option_2")}</option>
          <option value="military_help">{t("modal_form.option_3")}</option>
        </select>

        <label htmlFor="comment" className="request-help-label">
          {t("modal_form.comment")}
        </label>
        <input
          id="comment"
          name="comment"
          value={form.comment}
          placeholder={t("modal_form.comment_placeholder")}
          className="request-help-input"
          onChange={handleChange}
        ></input>
        <ButtonSubmit />
      </form>
    </>
  );
};

export default RequestHelpForm;
