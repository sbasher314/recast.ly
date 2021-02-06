var searchYouTube = (options, callback) => {
  // TODO
  $.get('https://youtube.googleapis.com/youtube/v3/search', {
    'part': 'snippet',
    'key': options.key,
    'maxResults': options.max,
    'q': options.query,
    'type': 'video',
    'videoEmbeddable': true,
  }, function (data) { callback(data); });
};

export default searchYouTube;
