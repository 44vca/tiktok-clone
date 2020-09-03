import React, { useRef, useState } from "react";
import "./Video.css";

function Video() {
  const videoRef = useRef(null);

  //Another way to handle player
  // const [playing, setPlaying] = useState(false);

  // const handleVideoPress = () => {
  //   if (playing) {
  //     videoRef.current.pause();
  //     setPlaying(false);
  //   } else {
  //     videoRef.current.play();
  //     setPlaying(true);
  //   }
  // };

  const handleVideoPress = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
    }
  };

  return (
    <div className="video">
      <video
        onClick={handleVideoPress}
        ref={videoRef}
        className="video__player"
        loop
        src="https://v16m.tiktokcdn.com/dba26a871842c04134e518eec7c9e911/5f5155da/video/tos/useast2a/tos-useast2a-pve-0068/49ba09ce3adf4304ad49d4ba59fdf203/?a=1233&br=3296&bt=1648&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=20200903144504010189036200140CD281&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M288NmhybmxndzMzNTczM0ApO2k4OGczPGU3NzxkMzk0OmdfaDFzYy0waTRfLS0wMTZzczAzMTIuNTFgNjJiMy4yYWE6Yw%3D%3D&vl=&vr="
      ></video>

      {/* Video Footer */}
      {/* Vide Sidebar */}
    </div>
  );
}

export default Video;
