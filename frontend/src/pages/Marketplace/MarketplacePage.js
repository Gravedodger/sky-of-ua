import React from "react";
import { Helmet } from "react-helmet";
import { SectionTitleText } from "../../Typography";
import { useTranslation } from "react-i18next";
import '../../i18n';

const MarketplacePage = () => {
    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>{t("site_name")} || {t("nav_marketplace")}</title>
                <meta name="description" content="" />
                <meta name="keywords" content="Ukraine, war, charity, marketplace" />
            </Helmet>

            <main>
                <div className="main-container">
                    <SectionTitleText>Welcome to the Marketplace Page!</SectionTitleText>
                </div>
            </main>
        </>
    )
}

export default MarketplacePage;
