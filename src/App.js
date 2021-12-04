import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import './App.css';
import NavBar from './NavBar';
import About from "./About";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><NavBar /> </>}
      <NavBar />
    </Router>
    <About />
  );
}

export default App;
