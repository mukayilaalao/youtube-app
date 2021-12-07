import React from "react"
import "./About.css"
import JennaImg from "./assets/Jenna.jpg"
import MkImg from "./assets/Mk.jpg"
import TrustyImg from "./assets/Trusty.jpg"

class About extends React.Component {
    render() {
        return (
            <div className="about-page-container">
                <div>
                    <h2>About Our Project...</h2>
                    <p className="about-para">This project is a YouTube clone created with React Application. Users are able to type anything into the search bar, a list of video suggestions will pop up below. Upon selecting the desired video, the video will be widen and renders in a new web page. Users can pause, play, add comments, delete comments, etc..</p>
                </div>
                <div className="bios-container">
                    <div className="trusty">
                        <h2>Lakisha Trusty</h2>
                        <img className="portrait" src={TrustyImg} alt="Picture of Lakisha Trusty"/>
                        <div>
                            <a href="https://www.linkedin.com/in/lakisha-trusty-101526118/" target="_blank" rel="noreferrer noopener"><img className="logo" src="https://cdn-icons-png.flaticon.com/512/174/174857.png"/></a>
                            <a href="https://github.com/daprincessanime" target="_blank" rel="noreferrer noopener"><img className="logo" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/></a>
                        </div>
                    </div>
                    <div className="alao">
                        <h2>Mukayila Alao</h2>
                        <img className="portrait" src={MkImg} alt="Picture of Mukayila Alao"/>
                        <div>
                            <a href="https://www.linkedin.com/in/mukayila-alao-ab120586/" target="_blank" rel="noreferrer noopener"><img className="logo" src="https://cdn-icons-png.flaticon.com/512/174/174857.png"/></a>
                            <a href="https://github.com/mukayilaalao" target="_blank" rel="noreferrer noopener"><img className="logo" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/></a>
                        </div>
                    </div>
                    <div className="qian">
                        <h2>Jenna Qian</h2>
                        <img className="portrait" src={JennaImg} alt="Picture of Jenna Qian"/>
                        <div>
                            <a href="https://www.linkedin.com/in/jiayinqian/" target="_blank" rel="noreferrer noopener"><img className="logo" src="https://cdn-icons-png.flaticon.com/512/174/174857.png"/></a>
                            <a href="https://github.com/jennaqian" target="_blank" rel="noreferrer noopener"><img className="logo" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"/></a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default About;