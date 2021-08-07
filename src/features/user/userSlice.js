import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../api";
import { Notification } from "../../components/common/Notification";
import { Utilities } from "../../components/common/Utilities";

export const getAllUser = createAsyncThunk(
    'user/getAllUser',
    async () => {
        try {
            const response = await userApi.getAllUser();
            if (Utilities.isNullOrEmpty(response) && response.length < 1) {
                Notification.success("Quản trị nhân viên", "Không có dữ liệu");
                return [];
            }
            return response;
        } catch (error) {
            Notification.error("Quản trị nhân viên", "Lỗi load danh sách nhân viên");
            return [];
        }
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoading: true,
        users: [],
        cities: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUser.pending, state => {
                state.isLoading = true;
            })
            .addCase(getAllUser.rejected, state => {
                state.isLoading = false;
            })
            .addCase(getAllUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.users = action.payload;
            })
    }
});

export const selectUser = (state) => state.user;

export default userSlice.reducer;
