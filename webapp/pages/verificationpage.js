import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Import useRouter instead of useNavigate
import loginBg from '../public/login-bg.png';
import { useSelector, useDispatch } from 'react-redux';
import { FiRefreshCw } from 'react-icons/fi';
import { setError } from '../src/app/redux/authSlice';
import { useRegisterMutation } from '../src/app/redux/api/authApi';

const VerificationPage = () => {
    const router = useRouter(); // Use useRouter instead of useNavigate
    const dispatch = useDispatch();
    const [countdown, setCountdown] = useState(30);
    const [canResend, setCanResend] = useState(false);
    const [register] = useRegisterMutation();

    const email = useSelector((state) => state.auth.email);
    const firstName = useSelector((state) => state.auth.firstName);
    const lastName = useSelector((state) => state.auth.lastName);
    const error = useSelector((state) => state.auth.error);

    useEffect(() => {
        document.title = 'eDraw - Verify Your Email';

        // Start with button disabled
        const timer = setInterval(() => {
            setCountdown((prev) => {
                if (prev <= 1) {
                    setCanResend(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [email]);

    const handleResendEmail = async () => {
        if (!canResend) return;
        setError(null);

        try {
            dispatch(setError(null));
            await register({
                email,
                firstName,
                lastName,
            }).unwrap();

            // Reset countdown on successful resend
            setCountdown(30);
            setCanResend(false);
        } catch (err) {
            console.error('Failed to resend:', err);
            dispatch(
                setError(
                    'Failed to resend verification email. Please try again.'
                )
            );
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

            {/* Overlay */}
            <div className="absolute inset-0 bg-white opacity-5" />

            {/* Content Container */}
            <div className="relative bg-white p-6 rounded-2xl shadow-lg border border-gray-150 w-4/5 max-w-2xl mx-auto text-center">
                {/* Logo */}
                <img
                    src="/e-draw_logo.png"
                    alt="Edraw Logo"
                    className="w-20 h-20 mx-auto mb-8 object-cover mb-10"
                />

                {/* Verification Message */}
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                    Check Your Email
                </h1>
                <p className="text-gray-600 mb-6">
                    We've sent a verification link to:
                    <br />
                    <span className="font-semibold text-gray-800">
                        {email || 'your email address'}
                    </span>
                </p>

                {/* Instructions */}
                <div className="bg-gray-50 p-6 rounded-lg mb-6 text-left">
                    <h2 className="font-semibold text-gray-900 mb-3">
                        Next steps:
                    </h2>
                    <ol className="list-decimal list-inside space-y-2 text-gray-600">
                        <li>Check your email inbox</li>
                        <li>Click the verification link in the email</li>
                        <li>Set your password to complete registration</li>
                    </ol>
                </div>

                {error && (
                    <div className="text-red-600 text-sm p-2 bg-red-50 border border-red-100 rounded-lg mb-4">
                        {error}
                    </div>
                )}

                {/* Resend Button */}
                <button
                    onClick={handleResendEmail}
                    disabled={!canResend}
                    className={`flex items-center justify-center w-full py-3 px-4 rounded-lg
                        ${
                            canResend
                                ? 'bg-red-700 hover:bg-red-800 text-white'
                                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        }
                        transition-all duration-200 ease-in-out`}
                >
                    <FiRefreshCw
                        className={`mr-2 ${!canResend && countdown > 0 ? 'animate-spin' : ''}`}
                    />
                    {canResend
                        ? 'Resend Verification Email'
                        : `Resend available in ${countdown}s`}
                </button>

                {/* Help Text */}
                <p className="mt-6 text-sm text-gray-500">
                    Can't find the email? Check your spam folder or contact
                    support at&nbsp;
                    {
                        <a
                            className="text-red-700 "
                            href="mailto:support@enlabel.com"
                        >
                            support@enlabel.com
                        </a>
                    }
                </p>
            </div>
        </div>
    );
};

export default VerificationPage;
