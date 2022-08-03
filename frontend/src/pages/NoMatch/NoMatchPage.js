import React from 'react';
import './NoMatchPage.css';
import { SectionTitleText } from "../../Typography";
import { useTranslation } from "react-i18next";
import "../../i18n";

const Page404 = () => {
    const { t } = useTranslation();

    return (
        <section className="page_404">
            <div>
                <div>
                    <div>
                        <div className="four_zero_four">
                            <div className="four_zero_four_bg">
                                <SectionTitleText className="four_zero_four_text">404</SectionTitleText>
                            </div>

                            <div className="content_box_404">
                                <h3>{t("four_oh_four.title")}</h3>

                                <p>{t("four_oh_four.description")}</p>

                                <a href="/">
                                    <button className="link_404">
                                        {t("four_oh_four.button")}
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Page404;
