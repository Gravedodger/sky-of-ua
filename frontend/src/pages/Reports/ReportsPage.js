import React from "react";
import { SectionTitleText } from "../../Typography";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import '../../i18n';

const ReportsPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("site_name")} || {t("nav_reports")}</title>
                <meta name="description" content=""/>
                <meta name="keywords" content="Ukraine, war, charity, reports" />
            </Helmet>

            <main>
                <div className="main-container">
                    <SectionTitleText>Welcome to the Reports Page!</SectionTitleText>
                </div>
            </main>
        </>
    )
}

export default ReportsPage;
