import React from "react";
import ShakaPlayer from "shaka-player-react";

const Player = props => {
  return (
    <ShakaPlayer
      autoPlay
      src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
    />
  );
};

export default Player;
