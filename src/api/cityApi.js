import axiosClient from "./axiosClient";

export const cityApi = {
    getAllCity: () => {
        const url = '/city'
        return axiosClient.get(url)
    },
   
}