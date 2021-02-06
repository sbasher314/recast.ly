import exampleVideoData from '../data/exampleVideoData.js';
import VideoListEntry from './VideoListEntry.js';
let videos;
var VideoList = (props) => (

  <div videos={videos = props.videos} className="video-list">
    {videos.map(video =>
      <VideoListEntry clickHandler={(vid) => props.clickHandler(vid)} video={video} />
    )}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
