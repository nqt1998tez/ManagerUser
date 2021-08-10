import { API_HOUSEFORRENT } from '../components/common';
import axiosClient from './axiosClient';

export const houseForRentApi = {
    getData: (params) => {
        const url = "/getlist";
        return axiosClient.get(API_HOUSEFORRENT + url, { params });
    },
    getByID: (params) => {
        const url = "/getbyid";
        return axiosClient.get(API_HOUSEFORRENT + url, { params });
    },
    delete: (params) => {
        const url = "/delete";
        return axiosClient.post(API_HOUSEFORRENT + url, { params });
    },
    insert: (params) => {
        const url = "/insert";
        return axiosClient.post(API_HOUSEFORRENT + url, params);
    },
    update: (params) => {
        const url = "/update";
        return axiosClient.post(API_HOUSEFORRENT + url, params);
    },
    getProvince: (params) => {
        const url = "/getprovinces";
        return axiosClient.get(API_HOUSEFORRENT + url, { params });
    },
    getDistrict: (params) => {
        const url = "/getdistricts";
        return axiosClient.get(API_HOUSEFORRENT + url, { params });
    },
    getWard: (params) => {
        const url = "/getwards";
        return axiosClient.get(API_HOUSEFORRENT + url, { params });
    }

}