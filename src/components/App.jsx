import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import Search from './Search.js';
import YOUTUBE_API_KEY from '../config/youtube.js';

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: props.videos || [],
      video: props.video || {'id': {'videoId': 'MPRiw9iavJk'}, 'snippet': {'title': 'title', 'description': 'description'}}
    };
    this.debounceSearch = _.debounce(
      (options) => this.props.searchYouTube(options, (data) => this.loadSearch(data)),
      1000);
  }

  clickHandler(video) {
    this.setState({'video': video});
  }

  loadSearch(videos) {
    console.log('isLoaded');
    this.setState({'video': videos[0], 'videos': videos});
  }

  componentDidMount() {
    this.searchYouTube('React.js');
  }

  searchYouTube(query) {
    var target = query.target;
    console.log(target);
    let options = {
      'key': YOUTUBE_API_KEY,
      'query': query,
      'max': 5
    };
    this.props.searchYouTube(options, (data) => this.loadSearch(data));
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search searchYouTube={this.searchYouTube.bind(this)}/>
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