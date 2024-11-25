import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
    reducerPath: 'authApi', // Lets Redux know which slice is associated with auth
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api',
    }),
    endpoints: (builder) => ({
        register: builder.mutation({
            // User registration is a mutation
            query: (userData) => ({
                url: '/auth/register', // -> localhost:3000/api/auth/register
                method: 'POST',
                body: userData,
            }),
        }),
        verify: builder.mutation({
            query: (verifyData) => ({
                url: '/auth/verify',
                method: 'POST',
                body: verifyData,
            }),
        }),
        login: builder.mutation({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        requestPasswordReset: builder.mutation({
            query: (data) => ({
                url: '/auth/forgot-password',
                method: 'POST',
                body: data,
            }),
        }),
        requestResendEmail: builder.mutation({
            query: (userData) => ({
                url: '/auth/resend-email',
                method: 'POST',
                body: userData,
            }),
        }),
        submitSupportForm: builder.mutation({
            query: (formData) => ({
                url: '/support/contact',
                method: 'POST',
                body: formData,
            }),
        }),
    }),
});

export const {
    useRegisterMutation,
    useVerifyMutation,
    useLoginMutation,
    useRequestPasswordResetMutation,
    useRequestResendEmailMutation,
    useSubmitSupportFormMutation,
} = authApi;
