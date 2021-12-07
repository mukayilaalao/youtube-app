import { Component } from "react";
import YouTube from "react-youtube";

class Content extends Component{
    // constructor(){
    //     super()
    //     this.state = {
    //         videos: [],
    //     }
    // }
    // componentDidMount = () => {
    //     fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q={}&type=video&key=${process.env.REACT_APP_API_KEY}`)
    //         .then((res)=>{
    //             return res.json();
    //         }).then((data)=>{
    //             this.setState({
    //                 videos: data.items ,                })
    //         })
    // }
    VideoHandlePause = event => {
        event.target.pauseVideo();
    }
    
    render (){
        // const opts = {
        //     playerVars: {
        //       autoplay: 1,
        //     }
        // }
        let videoArr = this.props.videos.map((video)=>{
            return (
            <li>
                <YouTube videoId={video.videoId}  onReady={this.VideoHandlePause}/>
                <h3>{video.snippet.title}</h3>
            </li>
           )
        })
        return (
          <section className="content">
              {!videoArr.length ? "No Search Results Yet! Please submit a search above": videoArr}

          </section>
        )
  }

}


export default Content;