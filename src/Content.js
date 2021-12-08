import { Component } from "react";
import Video from "./Video";
import "./Content.css";



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
    // 
    
    render (){
        // const opts = {
        //     playerVars: {
        //       autoplay: 1,
        //     }
        // }
        let videoArr = this.props.videos.map((video)=> <Video key={video.id.videoId} video={video} handleClick={this.props.handleClick}/>)
        return (
          <section className="content">
              {!videoArr.length ? <h4>"No Search Results Yet! Please submit a search above"</h4>: <ul className="all-videos">{videoArr}</ul>}

          </section>
        )
  }

}


export default Content;
