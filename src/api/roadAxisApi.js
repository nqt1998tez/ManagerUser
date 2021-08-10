import { API_ROADAXIS } from "../components/common";
import axiosClient from "./axiosClient";

export const roadAxisApi = {
    getData: (params) => {
        const url = "getlist";
        return axiosClient.get(API_ROADAXIS + url, { params })
    },
    getListSelect: (params) => {
        const url = "getlistselect";
        return axiosClient.get(API_ROADAXIS + url, { params });
    },
    getbyid: (params) => {
        const url = "getbyid";
        return axiosClient.get(API_ROADAXIS + url, { params });
    },
    insert: (params) => {
        const url = "insert";
        return axiosClient.get(API_ROADAXIS + url, params);
    },
    update: (params) => {
        const url = "update";
        return axiosClient.get(API_ROADAXIS + url, params);
    },
    updateassign: (params) => {
        const url = "updateassign";
        return axiosClient.get(API_ROADAXIS + url, { params });
    },
    delete: (params) => {
        const url = "delete";
        return axiosClient.post(API_ROADAXIS + url, params);
    }
}