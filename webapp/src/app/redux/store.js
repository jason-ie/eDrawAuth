import { configureStore } from '@reduxjs/toolkit';
import { authApi } from './api/authApi';
import authReducer from './authSlice';

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer, // Where API data is stored
        auth: authReducer, // Another slice for auth state
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(authApi.middleware),
});

export default store;
