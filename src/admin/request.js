import axios from 'axios';

const token = localStorage.getItem('token');
if (!token) console.warn("отсутствует токен")

const request = axios.create({
  baseURL: "https://webdev-api.loftschool.com",
  headers: {
    'Authorization': `Bearer ${token}`,
  }
  
});

export default request;