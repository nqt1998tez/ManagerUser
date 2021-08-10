import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice';
import counterReducer from '../features/counter/counterSlice';
import houseForRentSlice from '../features/houseForRent/houseForRentSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    counter: counterReducer,
    houseForRent: houseForRentSlice,
  },
});
