import React from 'react';
import './AboutUsSection.css';
import {SectionTitleBar, SectionTitleText} from "../../Typography";
import AboutUsBlock from "../../blocks/AboutUs-block";

const AboutUsSection = () => {
    return (
        <section>
            <div className="section-title">
                <SectionTitleBar />
                <SectionTitleText>Про нас</SectionTitleText>
            </div>
            <div className="section-wrap">
                <AboutUsBlock />
                <div className="vertical-line" />
                <AboutUsBlock />
                <div className="vertical-line" />
                <AboutUsBlock />
            </div>
        </section>
    )
}

export default AboutUsSection;
