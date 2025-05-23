import axios from 'axios';

const axiosInstance=axios.create({
    baseURL:'http://localhost:5656/',
    headers:{
        'Content-Type':'application/json'
    }
});
export default axiosInstance;