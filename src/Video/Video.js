import React, { useRef } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter/VideoFooter";
import VideoSidebar from "./VideoSidebar/VideoSidebar";

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
        src="https://v16m.tiktokcdn.com/8f0ac8928ae07b888a1b89facceb1375/5f5253a4/video/tos/useast2a/tos-useast2a-ve-0068c001/b80513819a614985b551f638bbd6a85e/?a=1233&br=666&bt=333&cr=0&cs=0&dr=0&ds=2&er=&l=2020090408474001019021906657002B2B&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajV0c3Nrbjo5djMzOjczM0ApNjc0M2VnN2U3N2Q0NDc3OmdgbzZeZW1qMnNfLS0tMTZzc2FjYTI2X2BeLmFjYzY0YmE6Yw%3D%3D&vl=&vr="
      ></video>

      <VideoFooter />
      <VideoSidebar />

      {/* Vide Sidebar */}
    </div>
  );
}

export default Video;
