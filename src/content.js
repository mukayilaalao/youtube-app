import { Component } from "react";
import YouTube from "react-youtube";

class Content extends Component{
    constructor(){
        super()
        this.state = {
            videos: [],
        }
    }
    componentDidMount = () => {
        fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=arianagrande&type=video&key=AIzaSyCJuTI4g41QrymV8Sxa7wFTWQdUidWyCcY")
            .then((res)=>{
                return res.json();
            }).then((data)=>{
                this.setState({
                    videos: data.items ,                })
            })
    }
    VideoHandlePause = event => {
        event.target.pauseVideo();
    }
    
    render (){
        let videoArr = this.state.videos.map((video)=>{
            return (
            <li>
                <YouTube videoId={video.videoId} onReady={this.VideoHandlePause}/>
                <h3>{video.snippet.title}</h3>
            </li>
           )
        })
        return <ul>{videoArr}</ul>
  }

}


export default Content;