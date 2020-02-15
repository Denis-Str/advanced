import axios from 'axios';

const request = axios.create({
    baseURL: "https://webdev-api.loftschool.com",
});

export default request;