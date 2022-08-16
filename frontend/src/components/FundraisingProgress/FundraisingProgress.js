import React from "react";
import "./FundraisingProgress.css";
import { useTranslation } from "react-i18next";
import "../../i18n";
import ChartRange from "../ChartRange";

const FundraisingProgress = ({ targetSum, collectedSum }) => {
  const { t } = useTranslation();

  let lessSum = targetSum - collectedSum;
  if (targetSum < collectedSum) {
    lessSum = 0;
  }
  const persents = (collectedSum / targetSum) * 100;

  return (
    <div className="progress-wrap">
      <div className="progress-info">
        <div className="progress-target">
          <p className="progress-target-label">{t("sum_required")}</p>
          <p className="progress-target-sum">₴{targetSum}</p>
        </div>

        <div className="progress-remains">
          <p className="progress-target-label">{t("sum_remains")}</p>
          <p className="progress-remaining-sum">₴{lessSum}</p>
        </div>
      </div>
      <ChartRange persents={persents} />
    </div>
  );
};

export default FundraisingProgress;
