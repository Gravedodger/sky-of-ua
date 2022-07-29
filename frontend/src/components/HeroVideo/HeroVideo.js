import React from "react";
import "./HeroVideo.css";
import heroVideo from "../../assets/video/hero-video-min.mp4";
import SocialLinks from "../SocialLinks";
import StartPresentationBlock from "../../blocks/StartPresentation-block";
import ScrollDown from "../ScrollDown";

const HeroVideo = () => {
  return (
    <div className="hero-video-wrap">
      <video
        src={heroVideo}
        autoPlay
        loop={true}
        muted
        className="hero-video"
      />
      <SocialLinks style="header" />
      <StartPresentationBlock />
      <ScrollDown />
    </div>
  );
};

export default HeroVideo;
