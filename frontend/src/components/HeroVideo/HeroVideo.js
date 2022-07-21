import React from "react";
import "./HeroVideo.css";
import heroVideo from "../../assets/video/hero-video-min.mp4";

const HeroVideo = () => {
  return (
    <video
      src={heroVideo}
      autoPlay
      loop={true}
      controls
      muted
      className="hero-video"
    ></video>
  );
};

export default HeroVideo;
