
import Content from "./Content";
import { BrowserRouter as Router, Routes, Route ,Navigate} from "react-router-dom";
import "./App.css";
import NavBar from "./NavBar";
import About from "./About";
import SearchBar from "./SearchBar";
import Comments from "./Comments";
import React from "react";

class App extends React.Component {
  constructor(){
    super();
    this.state={
      
      videos:[]
    }
  }
  fetchData=(inp)=>{
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${inp}&type=video&key=${process.env.REACT_APP_API_KEY}`)
            .then((res)=>{
                return res.json();
            }).then((data)=>{
                this.setState({
                    videos: data.items ,                })
            })
  }

  handleSubmit = (e,userInput) => {
    console.log(userInput);
    e.preventDefault()
    this.fetchData(userInput);
    
}
  render() { 
    return (
    <Router>
      <Routes>
        <Route path="/" element={<><NavBar /> <SearchBar handleSubmit={this.handleSubmit}/><Content videos={this.state.videos}/></>}/>
        <Route path="/about" element={<><NavBar /><About /></>}/>
        {/* <Route path="/videos" element={<><Comments/></>}/> */}
      </Routes>
    </Router>
      

    )}
}
 
export default App;