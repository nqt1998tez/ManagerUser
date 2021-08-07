import axiosClient from "./axiosClient";

export const userApi = {
    getAllUser: (params) => {
        const url = '/users'
        return axiosClient.get(url,{params})
    },
    deleteUser: params => {
        const url = `/users/${params}`
        return axiosClient.delete(url);
    },
}
