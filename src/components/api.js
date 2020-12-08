import axios from 'axios';

const api = axios.create({
    baseurl: 'http://25.12.117.74:30000',
});

export default api;