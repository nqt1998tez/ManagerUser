import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../api";

export const getAllUser = createAsyncThunk(
    'user/getAllUser',
    async (params) => {
        const response = await userApi.getAllUser(params);
        return response;
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
