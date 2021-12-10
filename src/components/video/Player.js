import React from "react";
import YouTube from "react-youtube";
import { Link, useParams } from "react-router-dom";
import Comments from "./Comments";
import "./Player.css";

function Player(props) {
  const params = useParams();
  const vidId = params.videoId;
  console.log(vidId);
  const { handleClear } = props;

  const VideoHandlePlay = (event) => {
    event.target.playVideo();
  };

  return (
    <section>
      <div className="player-container">
        <YouTube videoId={vidId} onReady={VideoHandlePlay} />
          <div className="new-search">
            <button>
              <Link onClick={handleClear} to="/">
                    Search New Videos
              </Link>
            </button>
          </div>
          <Comments />
      </div>
    </section>
  );
}

export default Player;

/*

<li className="video">
                <YouTube videoId={video.id.videoId}  onReady={this.VideoHandlePause}/>
                <h3>{video.snippet.title}</h3>
            </li>
*/