import React from "react";
import Content from "./Content";
import "./SearchBar.css";

class SearchBar extends React.Component {
  constructor() {
    super();

    this.state = {
      userInput: "",
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { userInput } = this.state;
    const { handleSubmit, videos } = this.props;
    return (
      <div className="search-container">
        <form onSubmit={(e) => handleSubmit(e, userInput)}>
          <input
            placeholder="Search"
            className="input-field"
            type="text"
            name="userInput"
            value={userInput}
            onChange={this.handleInput}
          />
          <button className="buttons" type="submit">Search</button>
        </form>
        <Content videos={videos} />
      </div>
    );
  }
}
export default SearchBar;
