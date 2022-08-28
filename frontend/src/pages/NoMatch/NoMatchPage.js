import React, { Fragment } from 'react';
import './NoMatchPage.css';
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";
import "../../i18n";

const Page404 = () => {
   const { t } = useTranslation();

   return (
     <>
        <Helmet>
           <meta name="description" content={t("meta_four-oh_four.description")} />
           <meta name="keywords" content={t("meta_four-oh_four.keywords")} />
           <title>{t("site_name")} || 404</title>
        </Helmet>

        <main>
           <section className="page_404">
              <div>
                 <div>
                    <div>
                       <div className="four_zero_four">
                          <div className="four_zero_four_bg">
                             <p className="section-title-text four_zero_four_text">404</p>
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
        </main>
     </>
   )
}

export default Page404;
