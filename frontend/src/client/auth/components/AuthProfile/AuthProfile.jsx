import React from "react";
import { Link } from "react-router-dom";
import "../../../../i18n";
import { useTranslation } from "react-i18next";

const AuthProfile = () => {
  const { t } = useTranslation();

  return(
    <div>
      <Link to="/register">{t("register")}</Link>
      <Link to="/login">{t("login")}</Link>
    </div>
  )
}

export default AuthProfile;
