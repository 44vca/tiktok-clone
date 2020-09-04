import React, { useRef } from "react";
import "./Video.css";
import VideoFooter from "./VideoFooter/VideoFooter";
import VideoSidebar from "./VideoSidebar/VideoSidebar";

function Video({ url, chanel, description, song, likes, shares, messages }) {
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
        src={url}
      ></video>

      <VideoFooter song={song} description={description} chanel={chanel} />
      <VideoSidebar likes={likes} shares={shares} messages={messages} />

      {/* Vide Sidebar */}
    </div>
  );
}

export default Video;
