import axiosClient from "./axiosClient";

export const userApi = {
    getAllUser: () => {
        const url = '/creatorskey=bf503bdc8c9c40279d18d5fa9b5eb54c&70'
        return axiosClient.get(url)
    },
    deleteUser: params => {
        const url = `/users/${params}`
        return axiosClient.delete(url);
    },
}
