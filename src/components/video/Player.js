import React from "react";
import YouTube from "react-youtube";
import { Link, useParams } from "react-router-dom";
import Comments from "./Comments";
import "./Player.css";

function Player(props) {
  const params = useParams();
  const vidId = params.videoId;
  console.log(vidId);
  const { handleClear, saveComments, videosComments } = props;

  const VideoHandlePlay = (event) => {
    event.target.playVideo();
  };

  return (
    <section>
      <div className="player-container">
        <YouTube
          className="youtube-video"
          videoId={vidId}
          onReady={VideoHandlePlay}
        />
        <div className="new-search">
          <button className="new-search-btn">
            <Link className="new-search-btn-link" onClick={handleClear} to="/">
              Search New Videos
            </Link>
          </button>
        </div>
      </div>
      <div>
        <Comments
          videoId={vidId}
          saveComments={saveComments}
          videosComments={videosComments}
        />
      </div>
    </section>
  );
}

export default Player;
