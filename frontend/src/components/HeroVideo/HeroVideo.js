import React from "react";
import "./HeroVideo.css";
import heroVideo from "../../assets/video/hero-video-min.mp4";
import SocialLinks from "../SocialLinks";

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
    </div>
  );
};

export default HeroVideo;
