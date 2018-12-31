import axios from "axios";

const youtube_key = process.env.REACT_APP_YOUTUBE_KEY;

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: youtube_key
    }
});
