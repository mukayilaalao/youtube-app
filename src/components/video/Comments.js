import React from "react";
import "./Comments.css";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      userComment: "",
      commentsInfo: [],
    };
  }
  getPrevComments = (id, videosComments) => {
    const videoObj = videosComments.find((obj) => obj.videoId === id);
    if (!videoObj) return [];
    return videoObj.commentsInfo;
  };
  componentDidMount = () => {
    const { videosComments, videoId } = this.props;
    console.log(videosComments);
    this.setState({
      commentsInfo: this.getPrevComments(videoId, videosComments),
    });
  };
  componentWillUnmount = () => {
    const { videoId, saveComments } = this.props;
    saveComments(videoId, this.state.commentsInfo);
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const { userName, userComment, commentsInfo } = this.state;
    this.setState({
      commentsInfo: [...commentsInfo, { userName, userComment }],
      userComment: "",
      userName: "",
    });
  };

  render() {
    const { userComment, userName, commentsInfo } = this.state;
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} className="form">
          <label htmlFor="commentor">Name</label>
          <br />
          <input
            id="commentor"
            value={userName}
            name="userName"
            placeholder="name"
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="comment">Comment</label>
          <br />
          <input
            id="comment"
            value={userComment}
            name="userComment"
            placeholder="comment"
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
        <ul className="comments">
          {commentsInfo.map((obj, i) => (
            <li key={"item" + i}>
              <>
                <h2>{obj.userName}</h2>
                <div>{obj.userComment}</div>
              </>
            </li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default Comments;
