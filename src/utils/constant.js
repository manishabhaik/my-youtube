export const YOUTUBE_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" + process.env.REACT_APP_GOOGLE_API_KEY;


  export const SEARCH_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
  export const SUGGEST_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/videos?&key=" + process.env.REACT_APP_GOOGLE_API_KEY;
  export const SEARCH_VIDEO_API = "https://youtube.googleapis.com/youtube/v3/search?key=" + process.env.REACT_APP_GOOGLE_API_KEY;
  export const LIVE_CHAT_COUNT = 250;
