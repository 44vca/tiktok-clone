import React, { useEffect, useState } from "react";
import "./App.css";
import Video from "./Video/Video";
import instance from "./axios";

function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await instance.get("/v2/posts");
      setVideos(response.data);

      return response;
    }

    fetchPosts();
  }, []);

  console.log(videos);

  return (
    <div className="app">
      <h3>Let's build a full tiktok clone!</h3>

      <div className="app__videos">
        {videos.map((video) => (
          <Video
            key={video._id}
            url={video.url}
            chanel={video.chanel}
            description={video.description}
            song={video.song}
            likes={video.likes}
            messages={video.messages}
            shares={video.shares}
          />
        ))}
      </div>

      {/* videos */}
      {/* <Video /> */}
      {/* <Video /> */}
    </div>
  );
}

export default App;
