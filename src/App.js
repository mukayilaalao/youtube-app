
import Content from "./Content";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import About from "./About";
import SearchBar from "./SearchBar";
import Comments from "./Comments";
import React from "react";

class App extends React.Component {
  render() { 
    return (
    <Router>
      <Routes>
        <Route path="/" element={<><NavBar /> <SearchBar /></>}/>
        <Route path="/about" element={<><NavBar /><About /></>}/>
        <Route path="/videos" element={<><Content/><Comments/></>}/>
      </Routes>
    </Router>
      

    )}
}
 
export default App;