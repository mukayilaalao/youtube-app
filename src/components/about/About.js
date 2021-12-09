import React from "react"
import "./About.css"
import JennaImg from "../../assets/Jenna.jpg"
import MkImg from "../../assets/Mk.jpg"
import TrustyImg from "../../assets/Trusty.jpg"

class About extends React.Component {
    render() {
        return (
            <div className="about-page-container">
                <div>
                    <h1>About Our Project...</h1>
                    <p className="about-para">This project is a YouTube clone created with React Application. Users are able to type anything into the search bar, a list of video suggestions will pop up below. Upon selecting the desired video, the video will be widen and renders in a new web page. Users can pause, play, add comments, delete comments, etc..</p>
                </div>
                <div className="bios-container">
                    <div className="trusty">
                        <h1>Lakisha Trusty</h1>
                        <img className="portrait" src={TrustyImg} alt="Lakisha Trusty"/>
                        <div>  
                            <a  href="https://www.linkedin.com/in/lakisha-trusty-101526118/" target="_blank" rel="noreferrer noopener"><img className="logo" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin 1"/></a>
                            <a  href="https://github.com/daprincessanime" target="_blank" rel="noreferrer noopener"><img className="logo" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Trusty"/></a>                    </div>
                        </div>  
                    <div className="alao">
                        <h1>Mukayila Alao</h1>
                        <img className="portrait" src={MkImg} alt="Mukayila Alao"/>
                        <div>
                            <a  href="https://www.linkedin.com/in/mukayila-alao-ab120586/" target="_blank" rel="noreferrer noopener"><img className="logo" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin 2"/></a>
                            <a  href="https://github.com/mukayilaalao" target="_blank" rel="noreferrer noopener"><img className="logo" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Mukayila"/></a>
                        </div>
                    </div>
                    <div className="qian">
                        <h1>Jenna Qian</h1>
                        <img className="portrait" src={JennaImg} alt="Jenna Qian"/>
                        <div>
                            <a  href="https://www.linkedin.com/in/jiayinqian/" target="_blank" rel="noreferrer noopener"><img className="logo" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin 3"/></a>
                            <a  href="https://github.com/jennaqian" target="_blank" rel="noreferrer noopener"><img className="logo" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Jenna"/></a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default About;