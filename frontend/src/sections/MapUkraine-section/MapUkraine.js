import React from "react";
import { Link } from "react-router-dom";
import "./MapUraine.css";
import dataMapUkraine from "./dataMapUkraine";
import { useTranslation } from "react-i18next";
import "../../i18n";

const MapUkraine = () => {
  const { t } = useTranslation();

  return (
    <div className="map-ukraine-wrap">
      <div className="section-title">
        <h3 className="section-title-text">{t("map_ukraine.title")}</h3>
      </div>

      <p className="section-description">{t("map_ukraine.description")}</p>
      <ul className="map-ukraine-list">
        {dataMapUkraine.map((item) => {
          const { id, src, styles } = item;

          return (
            <li key={id}>
              <Link to={`${id}`} style={styles} className={"map-ukraine-link"}>
                <img
                  src={src}
                  alt={t(`region.${id}`)}
                  className={"map-ukraine-image"}
                />
                <p className="map-ukraine-region-name">{t(`region.${id}`)}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MapUkraine;
