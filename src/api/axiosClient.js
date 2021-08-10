import axios from "axios";
import queryString from 'querystring';

const axiosClient = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    headers: {
        "Content-Type": "application/json",
        AuthenKey: 'GroundKey',
    },
    paramsSerializer: (params) => queryString.stringify(params)
})

axiosClient.interceptors.request.use(async config => {
    return config;
})

axiosClient.interceptors.response.use(async response => {
    if (response && response.data) {
        return response.data;
    }
    return response.data;
}, error => {
    throw (error);
})

export default axiosClient;