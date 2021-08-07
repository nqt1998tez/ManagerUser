import axiosClient from "./axiosClient";

export const userApi = {
    getAllUser: () => {
        const url = '/users'
        return axiosClient.get(url)
    },
    deleteUser: params => {
        const url = `/users/${params}`
        return axiosClient.delete(url);
    },
}
