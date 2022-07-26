import axios from "axios";
const request = axios.create({
    baseURL: 'https://youtube.googleapis.com/youtube/v3/',
    params: {
        key: 'AIzaSyDdYhu17eiptpt7gnIwHSDBPiC24dy_lbQ'
    }
})

export default request;