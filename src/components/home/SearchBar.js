import React from "react";
import Content from "./Content";
import "./SearchBar.css";

class SearchBar extends React.Component {
  render() {
    const { handleSubmit, videos, handleInput, userInput } = this.props;
    return (
      <div className="search-container">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            placeholder="--->   Enter Search Here   <---"
            className="input-field"
            type="text"
            name="userInput"
            value={userInput}
            onChange={(e) => handleInput(e)}
          />
          <button className="buttons" type="submit">
            Search
          </button>
        </form>
        <Content videos={videos} />
      </div>
    );
  }
}
export default SearchBar;
