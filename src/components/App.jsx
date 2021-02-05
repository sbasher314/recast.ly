import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: props.videos || [],
      video: props.video
    };

  }

  clickHandler(video) {
    this.setState({'video' : video});
    this.render();
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.video}/>
          </div>
          <div className="col-md-5">
            <VideoList clickHandler={(vid) => this.clickHandler(vid)} videos={this.state.videos} />
          </div>
        </div>
      </div>
    );
  }

}

export default App;