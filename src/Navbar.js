import React from "react";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
    constructor() {
        super()

    }

    render() {
        return (
            <div className="navbar">
                <img src="https://toppng.com/uploads/preview/youtube-logo-11609383902z56yosfap9.png" alt="Youtube Logo"/>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </div>
        )
    }
}

export default NavBar;
