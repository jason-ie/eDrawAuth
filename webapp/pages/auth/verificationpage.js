import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { FiRefreshCw } from 'react-icons/fi';
import { setError } from '../../src/app/redux/authSlice';
import { useRequestResendEmailMutation } from '../../src/app/redux/api/authApi';

const VerificationPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [countdown, setCountdown] = useState(30);
    const [canResend, setCanResend] = useState(false);
    const [requestResendEmail, { isLoading }] = useRequestResendEmailMutation();

    const email = useSelector((state) => state.auth.email);
    const firstName = useSelector((state) => state.auth.firstName);
    const verificationCode = useSelector(
        (state) => state.auth.verificationCode
    );
    const error = useSelector((state) => state.auth.error);

    /**
     * Function: useEffect
     *
     * Sets the document title and starts a countdown timer for enabling the resend button.
     *
     * Parameters:
     * None
     */
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

    /**
     * Function: handleResendEmail
     *
     * Handles the resend email functionality. Dispatches actions to set error state and requests to resend the email.
     *
     * Parameters:
     * None
     */
    const handleResendEmail = async () => {
        console.log('handle resend clicked');
        if (!canResend) return;

        try {
            dispatch(setError(null));
            console.log('Attempting to resend email to:', email);

            const result = await requestResendEmail({
                email,
                firstName,
                storedVerificationCode: verificationCode,
            }).unwrap();

            console.log('Resend result:', result);

            if (result.success) {
                setCountdown(30);
                setCanResend(false);
            } else {
                if (result.statusCode === 'INVALID_VERIFICATION') {
                    dispatch(
                        setError(
                            'Please sign up again to get a new verification link.'
                        )
                    );
                    setTimeout(() => router.push('/auth/signup'), 3000);
                    return;
                }
                dispatch(setError(result.message || 'Failed to resend email'));
            }
        } catch (err) {
            console.error('Resend failed:', err);
            dispatch(
                setError(
                    'Failed to resend verification email. Please try again.'
                )
            );
        }
    };

    return (
        <div className="h-screen w-full flex items-center justify-center overflow-hidden fixed inset-0">
            {/* Background Image */}
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

            {/* Overlay */}
            <div className="absolute inset-0 bg-white opacity-5" />

            {/* Content Container */}
            <div className="relative bg-white w-full max-w-2xl mx-auto text-center sm:p-4 rounded-2xl shadow-lg border border-gray-150 m-4">
                {/* Logo */}
                <img
                    src="/e-draw_logo1.png"
                    alt="Edraw Logo"
                    className="w-[120px] h-[120px] mx-auto mb-4 object-cover"
                />

                {/* Verification Message */}
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
                    onClick={() => {
                        console.log('Button clicked');
                        handleResendEmail();
                    }}
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
                        className={`mr-2 ${
                            !canResend && countdown > 0 ? 'animate-spin' : ''
                        }`}
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
