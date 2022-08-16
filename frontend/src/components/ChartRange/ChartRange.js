import React from "react";
import "./ChartRange.css";

const ChartRange = ({ persents = 50 }) => {
  return (
    <>
      <div className="chart-range-strip-bg">
        <div
          style={{ width: `${persents}%` }}
          className="chart-range-strip"
        ></div>
      </div>
    </>
  );
};

export default ChartRange;
