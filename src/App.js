import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import NavBar from './NavBar';
import About from "./About";
import SearchBar from "./SearchBar";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><NavBar /> <SearchBar /></>}/>
        <Route path="/about" element={<><NavBar /><About /></>}/>
       </Routes>
    </Router>

  );
}

export default App;
