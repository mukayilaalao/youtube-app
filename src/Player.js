import React from "react";
import YouTube from "react-youtube";
import {Link} from"react-router-dom";

class Player extends React.Component {

    VideoHandlePlay = event => {
        event.target.playVideo();

    }
    render() { 
        const {video}=this.props;
        return (
            <section>
                <YouTube videoId={video.id.videoId}  onReady={this.VideoHandlePlay}/>
                <div>
                  <button><Link to="/">Search New Videos</Link></button>
                </div>
            </section>
        );
    }
}
 
export default Player;



/*

<li className="video">
                <YouTube videoId={video.id.videoId}  onReady={this.VideoHandlePause}/>
                <h3>{video.snippet.title}</h3>
            </li>
*/