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

  handleDelete = (obj) => {
    const { commentsInfo } = this.state;
    let index = commentsInfo.indexOf(obj);
    let copy = [...commentsInfo];
    copy.splice(index, 1);
    this.setState({
      commentsInfo: copy,
    });
  };

  render() {
    const { userComment, userName, commentsInfo } = this.state;
    return (
      <React.Fragment>
        <hr />
        <div className="comments-container">
          <form onSubmit={this.handleSubmit} className="form-container">
            <label className="labels" htmlFor="commentor">
              Name
            </label>
            <br />
            <input
              className="input-field1"
              id="commentor"
              value={userName}
              name="userName"
              placeholder="Name ..."
              onChange={this.handleChange}
            />
            <br />
            <label className="labels" htmlFor="comment">
              Comment
            </label>
            <br />
            <textarea
              className="input-field2"
              id="comment"
              value={userComment}
              name="userComment"
              placeholder="Write comments here ..."
              onChange={this.handleChange}
            ></textarea>
            <br />
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
          <div className="comments-area">
            <ul className="comments">
              {commentsInfo.map((obj, i) => (
                <li id={i} className="li-comment" key={"item" + i}>
                  <>
                    <h2 className="user-name">{obj.userName}</h2>
                    <p className="user-comment">{obj.userComment}</p>
                  </>
                  <button
                    className="li-button"
                    onClick={() => {
                      this.handleDelete(obj);
                    }}
                  >
                    X
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Comments;
