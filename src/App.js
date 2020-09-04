import React from "react";
import "./App.css";
import Video from "./Video/Video";

function App() {
  return (
    <div className="app">
      <h3>Let's build a full tiktok clone!</h3>

      <div className="app__videos">
        <Video
          url="https://v16m.tiktokcdn.com/8f0ac8928ae07b888a1b89facceb1375/5f5253a4/video/tos/useast2a/tos-useast2a-ve-0068c001/b80513819a614985b551f638bbd6a85e/?a=1233&br=666&bt=333&cr=0&cs=0&dr=0&ds=2&er=&l=2020090408474001019021906657002B2B&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajV0c3Nrbjo5djMzOjczM0ApNjc0M2VnN2U3N2Q0NDc3OmdgbzZeZW1qMnNfLS0tMTZzc2FjYTI2X2BeLmFjYzY0YmE6Yw%3D%3D&vl=&vr="
          chanel="sonny.tonight"
          description="this works"
          song="Faith devides us"
          likes={12}
          messages={13}
          shares={1448}
        />
        <Video
          url="https://v16m.tiktokcdn.com/7d38cf3582f922c0c079ef9c086052cd/5f526a20/video/tos/useast2a/tos-useast2a-ve-0068c004/24ace5124d87416fb09bcdb36e1915fb/?a=1233&br=4726&bt=2363&cr=0&cs=0&cv=1&dr=0&ds=3&er=&l=202009041023510101901860291D00C8A7&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=MzZtc3FncnFsdjMzZzczM0ApOWg8Z2Y7aDtoNzk1NTQ2Zmdic2VqaDNxNTRfLS00MTZzczQxLzMxMmFhXy80MjReYi06Yw%3D%3D&vl=&vr="
          chanel="sonny.tonight"
          description="this works"
          song="Death unites us"
          likes={15}
          messages={18}
          shares={12}
        />
      </div>

      {/* videos */}
      {/* <Video /> */}
      {/* <Video /> */}
    </div>
  );
}

export default App;
