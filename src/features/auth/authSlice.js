import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userApi } from "../../api";

export const onLogin = createAsyncThunk(
    'auth/onLogin',
    async () => {
        const response = await userApi.getAllUser();
        return response;
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentUser: {},
        isLoggedIn: false,
        isLoading: false
    },
    reducers: {},
    extraReducers: builder => {
        builder
            .addCase(onLogin.pending, state => {
                state.isLoading = true;
            })
            .addCase(onLogin.fulfilled, (state, action) => {
                state.isLoading = false;
                state.currentUser = action.payload;
            })
    }
})

export const selectAuth = state => state.auth;

export default authSlice.reducer;