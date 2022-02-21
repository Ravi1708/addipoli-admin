import React, { useState } from "react";
import Sound from "react-sound";
import { Button } from "react-bootstrap";
import ModelNotification from "./model_notification.wav";

const PlaySound = (
  handleSongLoading,
  handleSongPlaying,
  handleSongFinishedPlaying,
  props
) => {
  const [isPlaying, setIsPlaying] = useState(true);
  return (
    <div>
      {/* <Button variant="secondary" onClick={() => setIsPlaying(!isPlaying)}>
        Close
      </Button> */}
      <Sound
        url={ModelNotification}
        playStatus={isPlaying ? Sound.status.PLAYING : Sound.status.STOPPED}
        // playStatus={Sound.status.PLAYING}
        // playFromPosition={300}
        onLoading={handleSongLoading}
        onPlaying={handleSongPlaying}
        onFinishedPlaying={handleSongFinishedPlaying}
      />
    </div>
  );
};

export default PlaySound;
