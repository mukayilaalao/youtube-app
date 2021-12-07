import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css"

class NavBar extends React.Component {
    

    render() {
        return (
            <div className="navbar">
                <img src="https://www.freeiconspng.com/thumbs/youtube-logo-png/logo-youtube-png-27.png" alt="Youtube Logo"/>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        )
    }
}

export default NavBar;
