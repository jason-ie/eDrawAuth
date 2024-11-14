import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    verificationCode: null, // Code sent during verification
    verificationPending: false, // Will set to true when waiting for verification
    verificationEmail: null,
    verificationName: null,
    error: null,
    accessToken: null,
    userType: null,
    email: null,
};

const authSlice = createSlice({
    name: 'auth', // Redux identifies slice, actions will be prefixed with auth/
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.email = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.verificationPending = true;
        },
        clearCredentials: (state) => {
            state.email = null;
            state.firstName = null;
            state.lastName = null;
            state.verificationPending = false;
        },
        setError: (state, action) => {
            state.error = action.payload;
        },
        setVerificationSuccess: (state, action) => {
            state.verificationSuccess = action.payload;
        },
        setLoginCredentials: (state, action) => {
            state.accessToken = action.payload.accessCode;
            state.userType = action.payload.userType;
            state.email = action.payload.email;
        },
    },
});

export const {
    setCredentials,
    clearCredentials,
    setError,
    setVerificationSuccess,
    setLoginCredentials,
} = authSlice.actions;

export default authSlice.reducer;
