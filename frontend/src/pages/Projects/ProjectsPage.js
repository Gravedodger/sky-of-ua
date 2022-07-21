import React from "react";
import { Helmet } from "react-helmet";
import { SectionTitleText } from "../../Typography";
import { useTranslation } from "react-i18next";
import '../../i18n';
import Header from "../../components/Header";

const ProjectsPage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("site_name")} || {t("nav_projects")}</title>
                <meta name="description" content=""/>
                <meta name="keywords" content="Ukraine, war, charity, projects"/>
            </Helmet>

            <Header />

            <main>
                <div className="main-container">
                    <SectionTitleText>Welcome to the Projects Page!</SectionTitleText>
                </div>
            </main>
        </>
    )
}

export default ProjectsPage;
