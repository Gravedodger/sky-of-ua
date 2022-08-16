import React from "react";
import "./ProjectAmountReport.css";
import ChartRange from "../ChartRange";

const ProjectAmountReport = ({ totalValue, currentValue }) => {
  const normilizedTotal = parseFloat(totalValue.split(" ").join(""));
  const normilizedCurrent = parseFloat(currentValue.split(" ").join(""));
  const persents = (normilizedCurrent / normilizedTotal) * 100;
  const lessValue = normilizedTotal - normilizedCurrent;

  return (
    <div className="project-amount-report-wrap">
      <h3 className="project-amount-report-title">Збір коштів</h3>
      <div className="project-amount-values-wrap">
        <div>
          <p className="project-amount-value-current">
            &#8372; {currentValue}{" "}
          </p>
          <p className="project-amount-value-total">
            зібрано із &#8372; {totalValue}
          </p>
        </div>
        <div>
          <p className="project-amount-text-less">Залишилось</p>
          <p className="project-amount-value-less"> &#8372; {lessValue}</p>
        </div>
      </div>
      <ChartRange persents={persents} />
    </div>
  );
};

export default ProjectAmountReport;
