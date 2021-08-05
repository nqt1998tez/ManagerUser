import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cityApi, userApi } from "../../api";

export const getAllUser = createAsyncThunk(
    'user/getAllUser',
    async () => {
        const response = await userApi.getAllUser();
        return response;
    }
)

export const getAllCity = createAsyncThunk(
    'city/getAllCity',
    async () => {
        const response = await cityApi.getAllCity();
        return response;
    }
)

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        loading: false,
        isLogged: true,
        users: [],
        cities: []
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllUser.pending, (state) => {
                state.loading = true;
                state.users = [];
                state.isLogged = true;
            })
            .addCase(getAllUser.fulfilled, (state, action) => {
                state.loading = false;
                state.isLogged = false;
                state.users = action.payload;
            })
        // .addCase(getAllCity.fulfilled, (state, action) => {
        //     state.cities = action.payload;
        //     state.loading = false;
        // })
    }

});

export const selectUsers = (state) => state.user.users;

export const selectUserLoading = (state) => state.user.loading;
export const selectIsLogged = (state) => state.user.isLogged;

// export const selectCities = (state) => state.user.cities;

export default userSlice.reducer;
