import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'; // Import useRouter from next/router
import EmailBox from '../../src/app/components/EmailBox';
import PasswordBox from '../../src/app/components/PasswordBox';
import loginBg from '../../public/login-bg.png';
import { useLoginMutation } from '../../src/app/redux/api/authApi';
import { setLoginCredentials, setError } from '../../src/app/redux/authSlice';
import Link from 'next/link';

function LoginPage() {
    const router = useRouter(); // Use useRouter instead of useNavigate
    const dispatch = useDispatch();
    const [login, { isLoading }] = useLoginMutation();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const error = useSelector((state) => state.auth.error);

    useEffect(() => {
        document.title = 'Login to eDraw';
        dispatch(setError(null));
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(setError(null));

        try {
            const result = await login({
                username: email,
                password: password,
            }).unwrap();

            if (result.success) {
                dispatch(setLoginCredentials(result));
                // Redirect to main application
                window.location.href = 'https://edraw.edraw.com';
            }
        } catch (err) {
            console.error('Login failed:', err);
            dispatch(
                setError('The email or password you entered is incorrect.')
            );
        }
    };

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

            <div className="relative bg-white w-full max-w-2xl mx-auto sm:p-12 rounded-2xl shadow-lg border border-gray-150 m-4">
                <img
                    src="/e-draw_logo1.png"
                    alt="Edraw Logo"
                    className="w-[120px] h-[120px] mx-auto mb-4 object-cover"
                />

                {router.query?.message && (
                    <div
                        className={`mb-5 p-3 rounded-lg border ${
                            router.query.type === 'error'
                                ? 'bg-red-50 border-red-200 text-red-700'
                                : 'bg-green-50 border-green-200 text-green-700'
                        }`}
                    >
                        {router.query.message}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <EmailBox
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        content="Access with eIFU credentials"
                        tooltip={true}
                    />

                    <PasswordBox
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password*"
                        hideCheck={true}
                    />

                    {error && (
                        <div className="text-red-600 mt-3 text-sm p-2 bg-red-50 border border-red-100 rounded-lg">
                            {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full mt-4 py-2 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800 
                                 focus:outline-none focus:ring-2 focus:ring-red-600
                                 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                <div className="mt-4 flex justify-between items-center text-gray-600">
                    <Link href="/auth/forgotpassword">
                        <span className="text-red-700 font-semibold hover:underline">
                            Forgot password?
                        </span>
                    </Link>
                    <span>
                        Don't have an account?
                        <Link
                            href="/auth/signup"
                            className="text-red-700 font-semibold hover:underline ml-1"
                        >
                            Sign up
                        </Link>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
