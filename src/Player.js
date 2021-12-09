import React from "react";
import YouTube from "react-youtube";
import {Link, useParams} from"react-router-dom";


function Player(props) {
    const params=useParams();
    const vidId=params.videoId;
    console.log(vidId);
    const {handleClear}=props;

    const VideoHandlePlay = event => {
        event.target.pauseVideo();

    }
    
    
    return (
        <section>
            <YouTube videoId={vidId} onReady={VideoHandlePlay}/>
            <div>
                <button><Link onClick={handleClear} to="/">Search New Videos</Link></button>
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