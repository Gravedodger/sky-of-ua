import React from "react";
import "./PartnersFooterBlock.css";
import { useTranslation } from "react-i18next";
import "./../../i18n";

const partnersList = [
  {
    id: "1",
    name: "Партнер 1",
  },
  {
    id: "2",
    name: "Партнер 2",
  },
  {
    id: "3",
    name: "Партнер 3",
  },
  {
    id: "4",
    name: "Партнер 4",
  },
];

const PartnersFooterBlock = () => {
  const { t } = useTranslation();

  return (
    <ul>
      {partnersList.map((element) => {
        return (
          <li key={element.id} className="partners-item">
            <p className="partners-title">{t("partner")} {element.id}</p>
          </li>
        )
      })}
    </ul>
  )
};

export default PartnersFooterBlock;
