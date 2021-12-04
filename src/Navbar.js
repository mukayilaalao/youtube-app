import React from "react";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
    constructor() {
        super()

    }

    render() {
        return (
            <div className="navbar">
                <img src="https://toppng.com/uploads/preview/youtube-logo-11609383902z56yosfap9.png" alt="Youtube Logo"/>
                <Link exact >Home</Link>
                <Link to="/about">About</Link>
            </div>
        )
    }
}

export default Navbar;