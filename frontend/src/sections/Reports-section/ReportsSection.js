import React from "react";
import { SectionTitleText, BlockTitle } from "../../Typography";
import "./ReportsSection.css";
import ladiesWithRubbish from "../../assets/images/ladies-with-rubbish.png";
import { posts } from "./initialData";

const ReportsSection = () => {
  return (
    <div className="reports__wrap">
      <SectionTitleText className="reports__title">Звіти</SectionTitleText>
      <div className="reports__content">
        <div className="card__wrap-main">
          <img
            src={ladiesWithRubbish}
            alt="жінки з візком"
            className="card__img-main"
          ></img>
          <div className="card__descr-main">
            <h4 className="card__title-main">
              Допомога Апостолівській лікарні.
            </h4>
            <p className="card__text-main">
              Благодійний фонд "НЕБО УКРАЇНИ" за підтримки наших друзів Anna
              Yashna із міста Новомосковськ надали допомогу дуже важливими
              лікарськими засобами Апостолівській лікарні.
            </p>
            <div className="card__footer-main">
              <a href="#" className="card__link-main">
                Читати більше
              </a>
              <time className="card__date-main" dateTime="2022-06-28">
                Червень 28, 2022
              </time>
            </div>
          </div>
        </div>
        <ul className="card__list">
          {posts.map((element) => {
            const { id, img, imgAlt, date, title, text } = element;
            return (
              <li key={id} className="card__item">
                <img src={img} alt={imgAlt} className="card__img-add"></img>
                <div className="card__descr-add">
                  <time dateTime={date} className="card__date-add">
                    {date}
                  </time>
                  <h4 className="card__title-add">{title}</h4>
                  <p className="card__text-add">{text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default ReportsSection;
