import axios from "axios";

const KEY = "AIzaSyCfpObb90wSy-tQ5lQU-Ld7bCD69DCcTjE";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5, // amount of video results that we need to recieve
    key: KEY
  }
});
