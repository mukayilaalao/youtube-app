import React from "react";
import {decode} from "html-entities";
import {Link} from "react-router-dom";


class Video extends React.Component {

    
    render() { 
        const {video,handleClick}=this.props;
        return (
            <li className="video">
               <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
               <Link onClick={()=>handleClick(video)} to={`/videos/${video.id.videoId}`}><h4>{decode(video.snippet.title)}</h4></Link>
            </li>
        );
    }
}
 
export default Video;