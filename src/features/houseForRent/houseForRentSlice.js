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
                return [];
            }
            return response;
        } catch (error) {
            Notification.error("Mặt bằng cơ hội", "Lỗi load danh sách Tỉnh/TP");
            return [];
        }
    }
)

export const houseForRentSlice = createSlice({
    name: 'houseForRent',
    initialState: {
        districts: [],
        provinces: [],
        wards: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getProvince.fulfilled, (state, action) => {
                state.districts = action.payload;
            })
    }
});

export const selectHouseForRent = (state) => state.houseForRent;

export default houseForRentSlice.reducer;
