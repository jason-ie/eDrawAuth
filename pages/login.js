import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'; // Import useRouter from next/router
import EmailBox from '../src/app/components/EmailBox';
import PasswordBox from '../src/app/components/PasswordBox';
import loginBg from '../public/login-bg.png';
import { useLoginMutation } from '../src/app/redux/api/authApi';
import { setLoginCredentials, setError } from '../src/app/redux/authSlice';
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
                router.push('/verify'); // Use router.push to navigate
            }
        } catch (err) {
            console.error('Login failed:', err);
            dispatch(
                setError('The email or password you entered is incorrect.')
            );
        }
    };

    return (
        <div className="bg-white flex flex-col items-center justify-center min-h-screen w-4/5 mx-auto">
            <div
                className="absolute inset-y-0 right-0 w-1/2"
                style={{
                    backgroundImage: `url(${loginBg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'right',
                }}
            />

            <div className="absolute inset-0 bg-white opacity-5" />

            <div className="relative bg-white p-12 rounded-2xl shadow-lg border border-gray-150 w-4/5 max-w-2xl mx-auto">
                <img
                    src="/e-draw_logo.png"
                    alt="Edraw Logo"
                    className="w-40 h-40 mx-auto mb-4 object-cover"
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
                        className="w-full mt-3 py-2 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800 
                                 focus:outline-none focus:ring-2 focus:ring-red-600
                                 disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                </form>

                <div className="mt-4 flex justify-between items-center text-gray-600">
                    <Link href="/forgot-password">
                        <div className="text-red-700 font-semibold hover:underline">
                            Forgot password?
                        </div>
                    </Link>
                    <div>
                        Don't have an account?{' '}
                        <Link href="/signup">
                            <div className="text-red-700 font-semibold hover:underline">
                                Sign up
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
