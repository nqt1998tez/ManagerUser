import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const onLogin = createAsyncThunk(
    'auth/onLogin',
    async () => {

        return new Promise((resolve) =>
            setTimeout(() => resolve({ username: "134941", fullname: "Nguyễn Quốc Tấn" }), 1000)
        );
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