import React from "react";
import { decode } from "html-entities";
import { Link } from "react-router-dom";
import "./Video.css";

class Video extends React.Component {
  render() {
    const { video } = this.props;
    return (
      <li className="video">
        <img
          src={video.snippet.thumbnails.medium.url}
          alt={video.snippet.title}
        />
        <Link to={`/videos/${video.id.videoId}`}>
          <h4>{decode(video.snippet.title)}</h4>
        </Link>
      </li>
    );
  }
}

export default Video;
