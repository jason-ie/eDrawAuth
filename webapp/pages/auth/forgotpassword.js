import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { CheckCircleIcon } from '@heroicons/react/solid';
import EmailBox from '../../src/app/components/EmailBox';
import { useRequestPasswordResetMutation } from '../../src/app/redux/api/authApi';
import { setError } from '../../src/app/redux/authSlice';

const ForgotPasswordPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [email, setEmail] = useState('');
    const [isEmailSent, setIsEmailSent] = useState(false);
    const error = useSelector((state) => state.auth.error);
    const [requestReset, { isLoading }] = useRequestPasswordResetMutation();

    useEffect(() => {
        if (router.isReady) {
            document.title = 'Forgot Password | eDraw';
            dispatch(setError(null));
        }
    }, [router.isReady, dispatch]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(setError(null));

        try {
            const result = await requestReset({
                email,
            }).unwrap();
            console.log(result);

            if (result.success) {
                setIsEmailSent(true);
            }
        } catch (err) {
            console.error('Password reset request failed:', err);
            dispatch(setError('Failed to send reset email. Please try again.'));
        }
    };

    if (isEmailSent) {
        return (
            <div className="h-screen w-full flex items-center justify-center overflow-hidden fixed inset-0">
                <div
                    className="absolute inset-y-0 left-0 w-1/2"
                    style={{
                        backgroundImage: 'url(/grid.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'left',
                    }}
                />
                <div
                    className="absolute inset-y-0 right-0 w-1/2"
                    style={{
                        backgroundImage: 'url(/login-bg.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'right',
                    }}
                />
                <div className="absolute inset-0 bg-white opacity-5" />

                <div className="relative bg-white p-12 rounded-2xl shadow-lg border border-gray-150 w-4/5 max-w-2xl mx-auto text-center">
                    <img
                        src="/e-draw_logo1.png"
                        alt="Edraw Logo"
                        className="w-20 h-20 mx-auto mb-8 object-cover"
                    />

                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6 flex items-center justify-center">
                        <CheckCircleIcon className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-green-700">
                            If an account exists, password reset instructions
                            have been sent.
                        </span>
                    </div>

                    <p className="text-gray-600 mb-6">
                        We've sent password reset instructions to:
                        <br />
                        <span className="font-semibold text-gray-800 mt-2 block">
                            {email}
                        </span>
                    </p>

                    <Link
                        href="/auth/login"
                        className="inline-block text-red-700 hover:text-red-800 font-semibold"
                    >
                        Back to Login
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="h-screen w-full flex items-center justify-center overflow-hidden fixed inset-0">
            <div
                className="absolute inset-y-0 left-0 w-1/2"
                style={{
                    backgroundImage: 'url(/grid.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'left',
                }}
            />
            <div
                className="absolute inset-y-0 right-0 w-1/2"
                style={{
                    backgroundImage: 'url(/login-bg.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                }}
            />
            <div className="absolute inset-0 bg-white opacity-5" />

            <div className="relative bg-white px-8 py-6 rounded-2xl shadow-lg border border-gray-150 w-4/5 max-w-2xl mx-auto">
                <img
                    src="/e-draw_logo1.png"
                    alt="Edraw Logo"
                    className="w-[120px] h-[120px] mx-auto mb-4 object-cover"
                />

                <h1 className="text-xl font-bold text-center text-gray-900 mb-2">
                    Forgot Your Password
                </h1>
                <p className="text-gray-600 text-center mb-8">
                    Please enter your information below and we'll send password
                    reset instructions to your email
                </p>

                <form onSubmit={handleSubmit} className="space-y-3">
                    <EmailBox
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        tooltip={false}
                    />

                    {error && (
                        <div className="text-red-600 text-sm p-2 bg-red-50 border border-red-100 rounded-lg">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading || !email}
                        className="w-full py-2 bg-red-700 text-white font-semibold rounded-lg 
            hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-600
            disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Sending...' : 'Request Reset Link'}
                    </button>
                </form>

                <div className="mt-4 text-center">
                    <Link href="/auth/login">
                        <div className="text-red-700 hover:text-red-800 font-semibold">
                            Back to Login
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPasswordPage;
