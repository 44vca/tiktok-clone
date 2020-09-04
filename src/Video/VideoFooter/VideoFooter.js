import React from "react";
import "./VideoFooter.css";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Ticker from "react-ticker";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@sonny.tonight</h3>
        <p>This is some description</p>
        <div className="videoFooter__ticker">
          <MusicNoteIcon className="videoFooter__icon" />

          <Ticker mode="smooth">
            {({ index }) => (
              <>
                <p>i am the song</p>
              </>
            )}
          </Ticker>
        </div>
      </div>
      <img
        className="videoFooter__record"
        src="https://s1.iconbird.com/ico/2013/9/452/w514h5141380477220vynil.png"
        alt=""
      />
    </div>
  );
}

export default VideoFooter;
