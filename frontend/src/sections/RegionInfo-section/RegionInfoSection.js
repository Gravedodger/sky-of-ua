import React from "react";
import "./RegionInfoSection.css";
import dataMapUkraine from "../MapUkraine-section/dataMapUkraine";
import { useTranslation } from "react-i18next";
import "../../i18n";

const RegionInfoSection = ({ id }) => {
  const { t } = useTranslation();
  const regionInfo = dataMapUkraine.filter((item) => item.id === id);
  const { src, statistic } = regionInfo[0];
  const { collectedFunds, completedProjects, volunteerCount } = statistic;

  return (
    <>
      <div className="region-info-section-wrap">
        <button className="region-info-goToMap">{t("region_info.return_to_map")}</button>
        <div className="region-info-content">
          <div className="region-info-card">
            <h3 className="region-info-title">{t(`region.${id}`)}</h3>
            <div className="region-info-presentation">
              <img
                src={src}
                alt={t(`region.${id}`)}
                className="region-info-image"
              />
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
                  <p className="region-info-text">{volunteerCount}</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="region-info-projects">
            <h4>{t("region_info.mykolayiv_projects")}</h4>
            <ul>
              <li>{t("project")} 1</li>
              <li>{t("project")} 2</li>
              <li>{t("project")} 3</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RegionInfoSection;
