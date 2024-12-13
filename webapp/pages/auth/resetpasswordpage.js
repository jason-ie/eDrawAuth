import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import PasswordBox from '../../src/app/components/PasswordBox';
import { setError } from '../../src/app/redux/authSlice';
import { useVerifyPasswordResetMutation } from '../../src/app/redux/api/authApi';

/**
 * Function: ResetPasswordPage
 *
 * Component for resetting the user's password. It verifies the reset token and allows the user to set a new password.
 *
 * Returns:
 * JSX.Element - The rendered component.
 */
const ResetPasswordPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const { token } = router.query;

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [verify, { isLoading }] = useVerifyPasswordResetMutation();

    const error = useSelector((state) => state.auth.error);

    /**
     * Function: useEffect
     *
     * Effect hook to handle the component's side effects. It checks if the router is ready and if the token is present.
     * If the token is missing, it redirects the user to the login page. If the token is present, it sets the document title
     * and clears any existing errors.
     */
    useEffect(() => {
        if (router.isReady && !token) {
            router.push('/auth/login');
            return;
        }

        if (router.isReady && token) {
            document.title = 'Reset Password | eDraw';
            dispatch(setError(null));
        }
    }, [token, router.isReady, dispatch]);

    /**
     * Function: handleSubmit
     *
     * Handles the form submission for resetting the password. It verifies that the passwords match and then attempts to reset
     * the password using the provided token. If successful, it redirects the user to the login page with a success message.
     * If there is an error, it sets the error message in the state.
     *
     * Parameters:
     * e - The form submission event.
     */
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
                router.push({
                    pathname: '/auth/login',
                    query: {
                        message:
                            'Password reset successful. Please login with your new password.',
                        type: 'success',
                    },
                });
            }
        } catch (err) {
            console.error('Reset password error:', err);
            dispatch(
                setError(
                    err.data?.message ||
                        'Failed to reset password. Please try again or request a new reset link.'
                )
            );
        }
    };

    if (!router.isReady) {
        return null;
    }

    return (
        <div className="h-screen w-full flex items-center justify-center overflow-hidden fixed inset-0">
            {/* Background Images */}
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

            {/* Content Container */}
            <div className="relative bg-white w-full max-w-2xl mx-auto sm:p-4 rounded-2xl shadow-lg border border-gray-150 m-4">
                <img
                    src="/e-draw_logo1.png"
                    alt="Edraw Logo"
                    className="w-[120px] h-[120px] mx-auto mb-4 object-cover"
                />

                <div className="text-center mb-4">
                    <h1 className="text-xl font-bold text-gray-900">
                        Reset Your Password
                    </h1>
                    <p className="text-gray-600 mt-2">
                        Please enter your new password below
                    </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <PasswordBox
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="New Password*"
                        showRequirements={true}
                    />

                    <div className="mt-4">
                        <PasswordBox
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm New Password*"
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
                        {isLoading ? 'Resetting password...' : 'Reset Password'}
                    </button>

                    <div className="mt-4"></div>
                </form>
            </div>
        </div>
    );
};

export default ResetPasswordPage;
