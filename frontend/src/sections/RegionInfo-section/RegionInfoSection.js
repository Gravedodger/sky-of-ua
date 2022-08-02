import React from "react";
import "./RegionInfoSection.css";
import dataMapUraine from "../MapUkraine-section/dataMapUkraine";
import { useTranslation } from "react-i18next";
import "../../i18n";

const RegionInfoSection = ({ id }) => {
  const { t } = useTranslation();
  const regionInfo = dataMapUraine.filter((item) => item.id === id);
  const { src, statistic } = regionInfo[0];
  const { collectedFunds, completedProjects, volonteersCount } = statistic;

  return (
    <>
      <div className="region-info-section-wrap">
        <button className="region-info-goToMap">Повернутись до Карти</button>
        <div className="region-info-content">
          <div className="region-info-card">
            <h3 className="region-info-title">{t(`region.${id}`)}</h3>
            <div className="region-info-presentation">
              <img
                src={src}
                alt={t(`region.${id}`)}
                className="region-info-image"
              ></img>
              <ul className="region-info-list">
                <li className="region-info-item">
                  <p className="region-info-text">
                    <span>&#8372; </span>
                    {collectedFunds}
                  </p>
                </li>
                <li className="region-info-item">
                  <p className="region-info-text">{completedProjects}</p>
                </li>
                <li className="region-info-item">
                  <p className="region-info-text">{volonteersCount}</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="region-info-projects">
            <h4>Проекти в Миколаївській області</h4>
            <ul>
              <li>proj 1</li>
              <li>proj 2</li>
              <li>proj 3</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegionInfoSection;
