import axios from "axios";
import queryString from 'querystring';
import { BASE_URL } from "../components/common";


const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: {
        'content-type': 'application/json',
        'AuthenKey': 'GroundKey'
    },
    paramsSerializer: params => queryString.stringify(params)
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