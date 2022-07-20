import React from "react";
import "./ReportsBlock.css";
import { CardText, CardTitle, ListCardText, ListCardTitle, SectionTitleText } from "../../Typography";
import ladiesWithRubbish from "../../assets/images/ladies-with-rubbish.png";
import boxWithItems from "../../assets/images/box-with-items.png";
import pushbedAndLadies from "../../assets/images/pushbed-and-ladies.png";
import foodWithMilitary from "../../assets/images/food-with-military.png";

const ReportsBlock = () => {
  return (
    <div className="reports-wrap">
      <SectionTitleText className="reports-title">Звіти</SectionTitleText>
      <div className="reports-content">
        <div className="card-wrap-main">
          <img
            src={ladiesWithRubbish}
            alt="жінки з візком"
            className="card-img-main"
            width={515} height={386}
          />
          <div className="card-descr-main">
            <CardTitle>
              Допомога Апостолівській лікарні.
            </CardTitle>
            <CardText>
              Благодійний фонд "НЕБО УКРАЇНИ" за підтримки наших друзів Anna
              Yashna із міста Новомосковськ надали допомогу дуже важливими
              лікарськими засобами Апостолівській лікарні.
            </CardText>
            <div className="card-footer-main">
              <a href="#" className="card-link-main">
                Читати більше
              </a>
              <time className="card=date-main" dateTime="2022-06-28">
                Червень 28, 2022
              </time>
            </div>
          </div>
        </div>

        <ul className="card-list">
          <li className="card-item">
            <img
              src={boxWithItems}
              alt="коробка з речами"
              className="card-img-add"
              width={187} height={141}
            />
            <time dateTime="2022-06-28" className="card-date-add">
              Червень 28, 2022
            </time>
            <ListCardTitle>
              За підтримки компанії Ecoprod, надали необхідну допомогу
              захисникам України
            </ListCardTitle>
            <ListCardText>
              Благодійний фонд "НЕБО УКРАЇНИ" за підтримки наших друзів Anna
              Yashna із міста Новомосковськ надали допомогу дуже важливими
              лікарськими засобами Апостолівській лікарні.
            </ListCardText>
          </li>
          <li className="card-item">
            <img
              src={pushbedAndLadies}
              alt="коробка з речами"
              className="card-img-add"
              width={187} height={141}
            />
            <time dateTime="2022-06-28" className="card-date-add">
              Червень 28, 2022
            </time>
            <ListCardTitle>
              Нова підтримка Апостолівській лікарні
            </ListCardTitle>
            <ListCardText className="card-text-add">
              Благодійний фонд "НЕБО УКРАЇНИ" за підтримки наших друзів Anna
              Yashna із міста Новомосковськ надали допомогу дуже важливими
              лікарськими засобами Апостолівській лікарні.
            </ListCardText>
          </li>
          <li className="card-item">
            <img
              src={foodWithMilitary}
              alt="коробка з речами"
              className="card-img-add"
              width={187} height={141}
            />
            <time dateTime="2022-06-28" className="card-date-add">
              Червень 28, 2022
            </time>
            <ListCardTitle className="card-title-add">Допомога переселенцям з Херсону</ListCardTitle>
            <ListCardText className="card-text-add">
              Благодійний фонд "НЕБО УКРАЇНИ" за підтримки наших друзів Anna
              Yashna із міста Новомосковськ надали допомогу дуже важливими
              лікарськими засобами Апостолівській лікарні.
            </ListCardText>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ReportsBlock;
