import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar/NavBar";
import About from "./components/about/About";
import SearchBar from "./components/home/SearchBar";
import React from "react";
import Player from "./components/video/Player";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      videosComments: [],
      userInput: "",
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  saveComments = (videoId, commentsInfo) => {
    let videoToSave = this.state.videosComments.find(
      (obj) => obj.videoId === videoId
    );
    if (!videoToSave)
      this.setState({
        videosComments: [
          ...this.state.videosComments,
          { videoId, commentsInfo },
        ],
      });
    else {
      const index = this.state.videosComments.indexOf(videoToSave);
      var copyVideosComments = [...this.state.videosComments];
      console.log(copyVideosComments);
      copyVideosComments.splice(index, 1);
      videoToSave = { videoId, commentsInfo };
      this.setState({
        videosComments: [...copyVideosComments, videoToSave],
      });
    }
  };

  fetchData = (inp) => {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=21&q=${inp}&type=video&key=${process.env.REACT_APP_API_KEY}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        this.setState({
          videos: data.items,
        });
      });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { userInput } = this.state;
    if (userInput) {
      this.fetchData(userInput);
      this.setState({
        userInput: "",
      });
    }
  };
  handleClear = () => {
    this.setState({ videos: [] });
  };

  render() {
    return (
      <Router>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <SearchBar
                userInput={this.state.userInput}
                handleInput={this.handleInput}
                handleSubmit={this.handleSubmit}
                videos={this.state.videos}
              />
            }
          />
          <Route path="/about" element={<About />} />
          <Route
            path="/videos/:videoId"
            element={
              <Player
                saveComments={this.saveComments}
                videosComments={this.state.videosComments}
                handleClear={this.handleClear}
              />
            }
          />
        </Routes>
      </Router>
    );
  }
}

export default App;
