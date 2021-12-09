import { Link } from "react-router-dom";
import "./NavBar.css"

function NavBar () {
    return (
        <div className="navbar">
            <img src="https://www.freeiconspng.com/thumbs/youtube-logo-png/logo-youtube-png-27.png" alt="Youtube Logo"/>
            <Link className="icon" to="/"><p>Home</p></Link>
            <Link className="icon" to="/about"><p>About</p></Link>
        </div>
    )
}
export default NavBar;
