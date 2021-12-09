import { Component } from "react";
import Video from "./Video";
import "./Content.css";

class Content extends Component {
  render() {
    let videoArr = this.props.videos.map((video) => (
      <Video key={video.id.videoId} video={video} />
    ));
    return (
      <section className="content">
        {!videoArr.length ? (
          <h4>"No Search Results Yet! Please submit a search above"</h4>
        ) : (
          <ul className="all-videos">{videoArr}</ul>
        )}
      </section>
    );
  }
}

export default Content;
