import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const onLogin = createAsyncThunk(
    'auth/onLogin',
    async () => {
        return new Promise((resolve) =>
            setTimeout(() => {
                localStorage.setItem("access_token", "fake_login");
                resolve({ username: "134941", fullname: "Nguyễn Quốc Tấn", isLoggedIn: true })
            }, 2000)
        );
    }
)

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        currentUser: {
            username: "",
            fullname: "",
            isLoggedIn: false
        },
        isLoading: false
    },
    reducers: {
        onLogout: (state) => {
            state.currentUser.isLoggedIn = false;
        }
    },
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
export const { onLogout } = authSlice.actions;

export default authSlice.reducer;