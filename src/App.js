import React from "react";
import "./App.css";
import Video from "./Video/Video";

function App() {
  return (
    <div className="app">
      <h3>Let's build a full tiktok clone!</h3>

      <div className="app__videos">
        <Video />
        <Video />
      </div>

      {/* videos */}
      {/* <Video /> */}
      {/* <Video /> */}
    </div>
  );
}

export default App;
