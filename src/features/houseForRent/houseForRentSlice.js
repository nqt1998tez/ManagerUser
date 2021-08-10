import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { houseForRentApi } from "../../api";
import { Notification } from "../../components/common/Notification";
import { Utilities } from "../../components/common/Utilities";

export const getProvince = createAsyncThunk(
    'houseForRent/getProvince',
    async () => {
        try {
            const response = await houseForRentApi.getProvince();
            if (Utilities.isNullOrEmpty(response) && response.length < 1) {
                Notification.success("Mặt bằng cơ hội", "Không có dữ liệu");
            }
            return response;
        } catch (error) {
            Notification.error("Mặt bằng cơ hội", "Lỗi load danh sách Tỉnh/TP");
        }
    }
)

export const getDistrict = createAsyncThunk(
    'houseForRent/getDistrict',
    async (params) => {
        try {
            const response = await houseForRentApi.getDistrict(params);
            if (Utilities.isNullOrEmpty(response) && response.length < 1) {
                Notification.success("Mặt bằng cơ hội", "Không có dữ liệu");
            }
            return response;
        } catch (error) {
            Notification.error("Mặt bằng cơ hội", "Lỗi load danh sách quận huyện");
        }
    }
)

export const getWard = createAsyncThunk(
    'houseForRent/getWard',
    async (params) => {
        try {
            const response = await houseForRentApi.getWard(params);
            if (Utilities.isNullOrEmpty(response) && response.length < 1) {
                Notification.success("Mặt bằng cơ hội", "Không có dữ liệu");
            }
            return response;
        } catch (error) {
            Notification.error("Mặt bằng cơ hội", "Lỗi load danh sách phường xã");
        }
    }
)

export const getRoadAxis = createAsyncThunk(
    'houseForRent/getRoadAxis',
    async (params) => {
        try {
            debugger;
            const response = await houseForRentApi.getListSelect(params);
            if (Utilities.isNullOrEmpty(response) && response.length < 1) {
                Notification.success("Mặt bằng cơ hội", "Không có dữ liệu");
            }
            return response.Data;
        } catch (error) {
            Notification.error("Mặt bằng cơ hội", "Lỗi load danh trục đường");
        }
    }
)

export const getByID = createAsyncThunk(
    'houseForRent',
    async () => {
        try {
            const response = await houseForRentApi.getByID({ houseForRentID: 1 });
            if (Utilities.isNullOrEmpty(response) && response.length < 1) {
                Notification.success("Mặt bằng cơ hội", "Không có dữ liệu");
            }
            return response;
        } catch (error) {
            Notification.error("Mặt bằng cơ hội", "Lỗi load chi tiết mặt bằng cơ hội");
        }
    }
)

export const houseForRentSlice = createSlice({
    name: 'houseForRent',
    initialState: {
        districts: [],
        provinces: [],
        wards: [],
        filter: {},
        lstRoadAxis: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProvince.pending, state => {
                state.provinces = [];
            })
            .addCase(getProvince.fulfilled, (state, action) => {
                state.provinces = action.payload.Data;
            })
            .addCase(getDistrict.pending, state => {
                state.districts = [];
            })
            .addCase(getDistrict.fulfilled, (state, action) => {
                state.districts = action.payload.Data;
            })
            .addCase(getWard.pending, state => {
                state.wards = [];
            })
            .addCase(getWard.fulfilled, (state, action) => {
                state.wards = action.payload.Data;
            })
            // .addCase(getByID.pending, state => {
            //     state.filter = {};
            // })
            // .addCase(getByID.fulfilled, (state, action) => {
            //     state.filter = action.payload;
            // })
            .addCase(getRoadAxis.pending, state => {
                state.lstRoadAxis = [];
            })
            .addCase(getRoadAxis.fulfilled, (state, action) => {
                state.lstRoadAxis = action.payload;
            })
    }
});

export const selectHouseForRent = (state) => state.houseForRent;

export default houseForRentSlice.reducer;
