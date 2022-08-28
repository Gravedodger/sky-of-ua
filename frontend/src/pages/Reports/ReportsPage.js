import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import '../../i18n';

const ReportsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <meta name="description" content={t("meta_reports.description")} />
        <meta name="keywords" content={t("meta_reports.keywords")} />
        <title>{t("site_name")} || {t("nav_reports")}</title>
      </Helmet>

      <main>
        <div className="main-container">
          <p className="section-title-text">Welcome to the Reports Page!</p>
        </div>
      </main>
    </>
  )
};

export default ReportsPage;
