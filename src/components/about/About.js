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
                            <a  href="https://github.com/daprincessanime" target="_blank" rel="noreferrer noopener"><img className="logo" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Trusty"/></a>                    
                        </div>
                        <p className="p-tag">I used to hate to carrying my 40lbs desktop downtown to 14 St Best Buy to be fix cause that was the only way without warranty. So, to save time and money I decided to learned about computer programming. The first code I wrote was 6 years ago in C+ during class assignment. As I tried to debugged my code, I kept getting an error message. It took me 15 hrs to realize I was missing a common. After getting my code to work and being frustrating and mortally defended by a common. The joy and excitement I felt for getting my code to work changed me.  Along with not carrying my 40lbs desktop to Best Buy to get it fix. Cause I prove to myself that I can fix my own problems if I know where to look. Which still to this day, I still use Best Buy. However, I'm learning the ends and outs of computer programming.</p>
                    </div>  
                    <div className="alao">
                        <h1>Mukayila Alao</h1>
                        <img className="portrait" src={MkImg} alt="Mukayila Alao"/>
                        <div>
                            <a  href="https://www.linkedin.com/in/mukayila-alao-ab120586/" target="_blank" rel="noreferrer noopener"><img className="logo" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin 2"/></a>
                            <a  href="https://github.com/mukayilaalao" target="_blank" rel="noreferrer noopener"><img className="logo" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Mukayila"/></a>
                        </div>
                        <p className="p-tag">Software engineering is all what I am passionate about now. I graduated from my University as a computer Networks and maintenance engineer. Once I finished theoretical courses, I had to spend at least three (03) months at FCPB, a financial institution in Burkina Faso (the country where I am from and where I studied), doing my internship in order to meet all the requirements to get a degree. I spent there six (06) months and then some months later I moved to the US. From writing my first line of code in C, I learned Python and with pursuit’s curriculum I will be good at Javascript, HTML, CSS, Node,Express, React/Redux, PostgreSQL, APIs, Git, Data structures, Algorithms, Sprints, Agile, Code reviews and pair programming. When tired of coding, I usually take a break listening to music or I go out and play soccer. I enjoy watching soccer as well. I have grit to grow very fast and succeed. I can learn anything quickly if I have the will. I will finish by saying that technology is driving our lives today and I can’t wait to land my first job and contribute.</p>
                    </div>
                    <div className="qian">
                        <h1>Jenna Qian</h1>
                        <img className="portrait" src={JennaImg} alt="Jenna Qian"/>
                        <div>
                            <a  href="https://www.linkedin.com/in/jiayinqian/" target="_blank" rel="noreferrer noopener"><img className="logo" src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="linkedin 3"/></a>
                            <a  href="https://github.com/jennaqian" target="_blank" rel="noreferrer noopener"><img className="logo" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="Jenna"/></a>
                        </div>
                        <p className="p-tag">Growing up, I've always been fasinated by tech gadgets, but the lack of exposure and the idea of IT being traditionally male dominated, it led me to believing that route was not for me. Fast forward to now, technology is a necessity in the 21st century, from navigation to finding the next 5-star Yelp meal. This sparked my interest and motivated me to have a career change. I am currently pursuing a 12-month, Google-funded software engineering fellowship in hopes of creating interactive websites and apps to improve my community. By learning and understanding tech myself, I can better explain and teach it to those around me as well.</p>
                    </div>
                </div>

            </div>
        )
    }
}

export default About;