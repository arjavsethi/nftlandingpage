import React from "react";
import styled from "styled-components";
import GIF from "../assets/MONSTROUS NFT.mp4";

const VideoContainer = styled.div`
  width: 100%;

  video {
    width: 100%;
    height: auto;
  }

  @media (max-width: 64em) {
    min-width: 40vh;
  }
`;
// const toggleMute = () => {
//   const video = document.querySelector("video");
//   video.muted = !video.muted;
// };
const CoverVideo = () => {
  return (
    <VideoContainer>
      <video src={GIF} type="video/mp4" controls/>
    </VideoContainer>
  );
};

export default CoverVideo;
