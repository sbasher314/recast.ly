var searchYouTube = (options, callback) => {
  $.get('https://youtube.googleapis.com/youtube/v3/search', {
    'key': options.key,
    'maxResults': options.max,
    'q': options.query,
    'part': 'snippet',
    'type': 'video',
    'videoEmbeddable': 'true',
  }, (data) => callback(data.items));
};

export default searchYouTube;
