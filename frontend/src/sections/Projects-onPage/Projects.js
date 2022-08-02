import React from "react";
import './Projects.css';
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ProjectCard from "../../components/ProjectCard";
import BottleOfWater from "../../assets/images/bottle-of-water.png";
import { useTranslation } from "react-i18next";
import "../../i18n";
import {SliderButtonLeft, SliderButtonRight} from "../../components/Buttons";

const Projects = () => {
    const {t} = useTranslation();
    const handleDragStart = (e) => e.preventDefault();

    const responsive = {
        0: {
            items: 1,
        },
        738: {
            items: 2,
        },
        1280: {
            items: 3,
        },
    };

    const items = [
        <div className="current-projects-card-wrap">
            <ProjectCard
                projectCardImage={BottleOfWater}
                projectCardImageAltText={t("project_card_common.imgAlt")}
                projectCardTitle={t("project_card_common.title")}
                projectCardText={t("project_card_common.text")}
                buttonText={t("support")}
                onDragStart={handleDragStart}
                role="presentation"
            />
        </div>,
        <div className="current-projects-card-wrap">
            <ProjectCard
                projectCardImage={BottleOfWater}
                projectCardImageAltText={t("project_card_common.imgAlt")}
                projectCardTitle={t("project_card_common.title")}
                projectCardText={t("project_card_common.text")}
                buttonText={t("support")}
                onDragStart={handleDragStart}
                role="presentation"
            />
        </div>,
        <div className="current-projects-card-wrap">
            <ProjectCard
                projectCardImage={BottleOfWater}
                projectCardImageAltText={t("project_card_common.imgAlt")}
                projectCardTitle={t("project_card_common.title")}
                projectCardText={t("project_card_common.text")}
                buttonText={t("support")}
                onDragStart={handleDragStart}
                role="presentation"
            />
        </div>,
        <div className="current-projects-card-wrap">
            <ProjectCard
                projectCardImage={BottleOfWater}
                projectCardImageAltText={t("project_card_common.imgAlt")}
                projectCardTitle={t("project_card_common.title")}
                projectCardText={t("project_card_common.text")}
                buttonText={t("support")}
                onDragStart={handleDragStart}
                role="presentation"
            />
        </div>,
        <div className="current-projects-card-wrap">
            <ProjectCard
                projectCardImage={BottleOfWater}
                projectCardImageAltText={t("project_card_common.imgAlt")}
                projectCardTitle={t("project_card_common.title")}
                projectCardText={t("project_card_common.text")}
                buttonText={t("support")}
                onDragStart={handleDragStart}
                role="presentation"
            />
        </div>,
        <div className="current-projects-card-wrap">
            <ProjectCard
                projectCardImage={BottleOfWater}
                projectCardImageAltText={t("project_card_common.imgAlt")}
                projectCardTitle={t("project_card_common.title")}
                projectCardText={t("project_card_common.text")}
                buttonText={t("support")}
                onDragStart={handleDragStart}
                role="presentation"
            />
        </div>,
    ];

    return (
        <>
            {/*<div className="slider-nav-buttons">*/}
            {/*    <SliderButtonLeft />*/}
            {/*    <SliderButtonRight />*/}
            {/*</div>*/}

            <AliceCarousel
                mouseTracking
                items={items}
                autoPlay
                autoPlayInterval={1400}
                infinite={true}
                responsive={responsive}
                renderPrevButton={SliderButtonLeft}
                renderNextButton={SliderButtonRight}
            />
        </>
    )
};

export default Projects;
