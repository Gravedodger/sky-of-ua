import React from "react";
import "./ReportsSection.css";
import { useTranslation } from "react-i18next";
import "../../i18n";
import ladiesWithRubbish from "../../assets/images/ladies-with-rubbish.png";
import boxWithItems from "../../assets/images/box-with-items.png";
import pushbedAndLadies from "../../assets/images/pushbed-and-ladies.png";
import foodWithMilitary from "../../assets/images/food-with-military.png";

const ReportsSection = () => {
  const { t } = useTranslation();

  return (
    <div className="reports-wrap">
      <h3 className="reports-title section-title-texts">
        {t("reports_section_title")}
      </h3>

      <div className="reports-content">
        <div className="card-wrap-main">
          <img
            src={ladiesWithRubbish}
            alt={t("reports_post_large.img_Alt")}
            className="card-img-main"
          />
          <div className="card-descr-main">
            <h4 className="card-title-main">
              {t("reports_post_large.post_title")}
            </h4>
            <p className="card-text-main">
              {t("reports_post_large.post_text")}
            </p>
            <div className="card-footer-main">
              <a href="/" className="card-link-main">
                {t("read_more")}
              </a>
              <time className="card-date-main" dateTime="2022-06-28">
                {t("month_june")} 28, 2022
              </time>
            </div>
          </div>
        </div>

        <ul className="report-card-list">
          <li className="report-card-item">
            <img
              src={boxWithItems}
              alt={t("reports_post_1.img_Alt")}
              className="card-img-add"
            />
            <div className="card-descr-add">
              <time dateTime={28072022} className="card-date-add">
                {t("month_june")} 28, 2022
              </time>
              <h4 className="card-title-add">
                {t("reports_post_1.post_title")}
              </h4>
              <p className="card-text-add">{t("reports_post_1.post_text")}</p>
            </div>
          </li>

          <li className="report-card-item">
            <img
              src={pushbedAndLadies}
              alt={t("reports_post_2.img_Alt")}
              className="card-img-add"
            />
            <div className="card-descr-add">
              <time dateTime={28072022} className="card-date-add">
                {t("month_june")} 28, 2022
              </time>
              <h4 className="card-title-add">
                {t("reports_post_2.post_title")}
              </h4>
              <p className="card-text-add">{t("reports_post_2.post_text")}</p>
            </div>
          </li>

          <li className="report-card-item">
            <img
              src={foodWithMilitary}
              alt={t("reports_post_3.img_Alt")}
              className="card-img-add"
            />
            <div className="card-descr-add">
              <time dateTime={28072022} className="card-date-add">
                {t("month_june")} 28, 2022
              </time>
              <h4 className="card-title-add">
                {t("reports_post_3.post_title")}
              </h4>
              <p className="card-text-add">{t("reports_post_3.post_text")}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ReportsSection;
