import React from "react";
import "./MapUraine.css";
import { SectionTitleText } from "../../Typography";
import { useTranslation } from "react-i18next";
import dataMapUkraine from "./dataMapUkraine";
import "../../i18n";

const MapUkraine = () => {
  const { t } = useTranslation();
  return (
    <div className="map-ukraine-wrap">
      <div className="section-title">
        <SectionTitleText>{t("map_ukraine.title")}</SectionTitleText>
      </div>
      <p className="section-descriprion">{t("map_ukraine.description")}</p>
      <ul className="map-ukraine-list">
        {dataMapUkraine.map((item) => {
          const { id, src, styles } = item;
          return (
            <li key={id} style={styles} className={"map-ukraine-item"}>
              <img
                src={src}
                alt={t(`region.${id}`)}
                className={"map-ukraine-image"}
              ></img>
              <p className="map-ukraine-region-name">{t(`region.${id}`)}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MapUkraine;
