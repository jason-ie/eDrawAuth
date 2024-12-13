import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Create an API service for authentication-related endpoints
export const authApi = createApi({
    reducerPath: 'authApi', // Lets Redux know which slice is associated with auth
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/api', // Base URL for all API requests
    }),
    endpoints: (builder) => ({
        // Endpoint for user registration
        register: builder.mutation({
            query: (userData) => ({
                url: '/auth/register',
                method: 'POST',
                body: userData,
            }),
        }),
        // Endpoint for email verification
        verify: builder.mutation({
            query: (verifyData) => ({
                url: '/auth/verify',
                method: 'POST',
                body: verifyData,
            }),
        }),
        // Endpoint for user login
        login: builder.mutation({
            query: (credentials) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        // Endpoint for requesting a password reset
        requestPasswordReset: builder.mutation({
            query: (data) => ({
                url: '/auth/forgot-password',
                method: 'POST',
                body: data,
            }),
        }),
        // Endpoint for resending verification email
        requestResendEmail: builder.mutation({
            query: (userData) => ({
                url: '/auth/resend-email',
                method: 'POST',
                body: userData,
            }),
        }),
        // Endpoint for submitting a support form
        submitSupportForm: builder.mutation({
            query: (formData) => ({
                url: '/support/contact',
                method: 'POST',
                body: formData,
            }),
        }),
        // Endpoint for verifying password reset
        verifyPasswordReset: builder.mutation({
            query: (resetData) => ({
                url: '/auth/verify',
                method: 'POST',
                body: resetData,
            }),
        }),
        // Endpoint for getting password requirements
        getPasswordRequirements: builder.query({
            query: () => ({
                url: '/auth/password/requirements',
                method: 'GET',
            }),
        }),
    }),
});

// Export hooks for each endpoint to be used in components
export const {
    useRegisterMutation,
    useVerifyMutation,
    useLoginMutation,
    useRequestPasswordResetMutation,
    useRequestResendEmailMutation,
    useSubmitSupportFormMutation,
    useVerifyPasswordResetMutation,
    useGetPasswordRequirementsQuery,
} = authApi;
