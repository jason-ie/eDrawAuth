import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Use Next.js router
import { useDispatch, useSelector } from 'react-redux';
import { CheckCircleIcon } from '@heroicons/react/solid';
import PasswordBox from '../src/app/components/PasswordBox';
import loginBg from '../public/login-bg.png';
import {
    clearCredentials,
    setError,
    setVerificationSuccess,
} from '../src/app/redux/authSlice';
import { useVerifyMutation } from '../src/app/redux/api/authApi';

const PasswordPage = () => {
    const router = useRouter(); // Use useRouter for navigation and query params
    const dispatch = useDispatch();

    // Redux state
    const error = useSelector((state) => state.auth.error);
    const verificationSuccess = useSelector(
        (state) => state.auth.verificationSuccess
    );
    const email = useSelector((state) => state.auth.email);

    // RTK Query mutation
    const [verify, { isLoading }] = useVerifyMutation();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // Get the verification token from the query parameters
    const { verificationToken } = router.query;

    useEffect(() => {
        if (!verificationToken) {
            router.push('/signup'); // Redirect to signup if no token
        }
        document.title = 'Set Password | eDraw';

        dispatch(setError(null));

        // Set verification success since email is verified at this point
        dispatch(setVerificationSuccess(true));
    }, [verificationToken, router, dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(setError(null));

        if (password !== confirmPassword) {
            dispatch(setError('Passwords do not match'));
            return;
        }

        try {
            const result = await verify({
                verificationCode: verificationToken,
                password: password,
            }).unwrap();
            console.log('result', result);

            if (result.success) {
                dispatch(clearCredentials());
                router.push('/login', {
                    state: {
                        message: 'Account verified successfully. Please login.',
                        type: 'success',
                    },
                });
            }
        } catch (err) {
            console.error('Verification error:', err);
            if (err.data?.statusCode === 905) {
                dispatch(clearCredentials());
                router.push('/login', {
                    state: {
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

    return (
        <div className="bg-white flex flex-col items-center justify-center min-h-screen">
            {/* Background Image */}
            <div
                className="absolute inset-y-0 right-0 w-1/2"
                style={{
                    backgroundImage: `url(${loginBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                }}
            />
            <div className="absolute inset-0 bg-white opacity-5" />

            {/* Content Container */}
            <div className="relative bg-white px-12 py-4 rounded-2xl shadow-lg border border-gray-200 w-3/5 max-w-2xl max-h-lvh mx-auto">
                <img
                    src="/e-draw_logo.png"
                    alt="Edraw Logo"
                    className="w-20 h-20 mx-auto mb-3 mt-3 object-cover"
                />

                <div className="text-center mb-8">
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
