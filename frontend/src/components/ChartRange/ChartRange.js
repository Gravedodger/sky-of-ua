import React from "react";
import "./ChartRange.css";

const ChartRange = ({ persents = 50 }) => {
  let normilizedPersents = parseInt(persents);
  if (normilizedPersents < 0) normilizedPersents = 0;
  if (normilizedPersents > 100) normilizedPersents = 100;
  return (
    <>
      <div className="chart-range-strip-bg">
        <div
          style={{ width: `${normilizedPersents}%` }}
          className="chart-range-strip"
        ></div>
      </div>
    </>
  );
};

export default ChartRange;
