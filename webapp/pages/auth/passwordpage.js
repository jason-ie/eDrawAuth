import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Use Next.js router
import { useDispatch, useSelector } from 'react-redux';
import { CheckCircleIcon } from '@heroicons/react/solid';
import PasswordBox from '../../src/app/components/PasswordBox';
import loginBg from '../../public/login-bg.png';
import {
    clearCredentials,
    setError,
    setVerificationSuccess,
} from '../../src/app/redux/authSlice';
import { useVerifyMutation } from '../../src/app/redux/api/authApi';

const PasswordPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const { token } = router.query;

    // Rest of your code stays the same
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [verify, { isLoading }] = useVerifyMutation();

    const error = useSelector((state) => state.auth.error);
    const verificationSuccess = useSelector(
        (state) => state.auth.verificationSuccess
    );
    const email = useSelector((state) => state.auth.email);

    useEffect(() => {
        if (router.isReady && !token) {
            router.push('/auth/signup');
            return;
        }

        if (router.isReady && token) {
            document.title = 'Set Password | eDraw';
            dispatch(setError(null));
            dispatch(setVerificationSuccess(true));
        }
    }, [token, router.isReady, dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            dispatch(setError('Passwords do not match'));
            return;
        }

        try {
            const result = await verify({
                verificationCode: token,
                password: password,
            }).unwrap();

            if (result.success) {
                dispatch(clearCredentials());
                router.push({
                    pathname: '/auth/login',
                    query: {
                        message: 'Account verified successfully. Please login.',
                        type: 'success',
                    },
                });
            }
        } catch (err) {
            console.error('Verification error:', err);
            if (err.data?.statusCode === 905) {
                dispatch(clearCredentials());
                router.push({
                    pathname: '/auth/login',
                    query: {
                        message: 'Account was already created. Please Login.',
                        type: 'error',
                    },
                });
            } else {
                dispatch(
                    setError(
                        err.data?.message ||
                            'An error occurred during verification. Please try again.'
                    )
                );
            }
        }
    };

    if (!router.isReady) {
        return null;
    }

    return (
        <div className="h-screen w-full flex items-center justify-center overflow-hidden fixed inset-0">
            {/* Background Image */}
            <div
                className="absolute inset-y-0 right-0 w-1/2"
                style={{
                    backgroundImage: 'url(/login-bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                }}
            />
            <div className="absolute inset-0 bg-white opacity-5" />

            {/* Content Container */}
            <div className="relative bg-white w-full max-w-2xl mx-auto sm:p-4 rounded-2xl shadow-lg border border-gray-150 m-4">
                <img
                    src="/e-draw_logo.png"
                    alt="Edraw Logo"
                    className="w-[120px] h-[120px] mx-auto mb-4 object-cover"
                />

                <div className="text-center mb-4">
                    <h1 className="text-2xl font-bold text-gray-900">
                        Welcome to eDraw
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Set up your password to complete your account creation
                    </p>
                </div>

                {/* Success Banner */}
                {verificationSuccess && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4 flex items-center">
                        <CheckCircleIcon className="h-4 w-4 text-green-500 mr-2" />
                        <span className="text-green-700 font-medium">
                            Email verified successfully
                            {email ? `: ${email}` : ''}
                        </span>
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <PasswordBox
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Create Password*"
                        showRequirements={true}
                    />

                    <div className="mt-4">
                        <PasswordBox
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm Password*"
                            isConfirmation={true}
                            primaryPassword={password}
                        />
                    </div>

                    {error && (
                        <div className="text-red-600 text-sm p-2 bg-red-50 border border-red-100 rounded-lg">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full py-2 bg-red-700 text-white font-semibold rounded-lg 
                                 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-600
                                 disabled:bg-gray-400 disabled:cursor-not-allowed
                                 transition-colors duration-200"
                    >
                        {isLoading
                            ? 'Setting up your account...'
                            : 'Complete Account Setup'}
                    </button>

                    <div className="mt-4"></div>
                </form>
            </div>
        </div>
    );
};

export default PasswordPage;
