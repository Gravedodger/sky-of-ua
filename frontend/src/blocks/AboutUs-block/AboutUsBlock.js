import React from "react";
import "./AboutUsBlock.css";

const AboutUsBlock = ({ aboutUsBlockTitle, aboutUsBlockText }) => {
  return (
    <li className="block-container">
      <h3 className="block-title">{aboutUsBlockTitle}</h3>
      <p className="block-text">{aboutUsBlockText}</p>
    </li>
  );
};

export default AboutUsBlock;
