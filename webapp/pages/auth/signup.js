import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import NameInput from '../../src/app/components/NameInput';
import EmailBox from '../../src/app/components/EmailBox';
import LicenseAgreement from '../../src/app/components/LicenseAgreement';
import loginBg from '../../public/login-bg.png';
import { useRegisterMutation } from '../../src/app/redux/api/authApi';
import {
    setCredentials,
    setVerificationCode,
    setError,
} from '../../src/app/redux/authSlice';
import { useRouter } from 'next/router';

/**
 * Function: SignupPage
 *
 * Renders the signup page with form inputs for first name, last name, email, and license agreement.
 * Handles form submission and registration logic.
 */
export const SignupPage = () => {
    // Redux hooks
    // const navigate = useNavigate();
    const dispatch = useDispatch();
    const [register, { isLoading }] = useRegisterMutation();
    const router = useRouter();

    // State for form inputs
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [licenseAccepted, setLicenseAccepted] = useState(false);
    const error = useSelector((state) => state.auth.error);

    useEffect(() => {
        document.title = 'eDraw - Create Your Account';
        setError(null);
    }, []);

    /**
     * Function: isFormValid
     *
     * Checks if the form inputs are valid.
     *
     * Returns:
     * Boolean indicating whether the form is valid.
     */
    const isFormValid = () => {
        return (
            email.trim() !== '' &&
            firstName.trim() !== '' &&
            lastName.trim() !== '' &&
            licenseAccepted
        );
    };

    /**
     * Function: handleSubmit
     *
     * Handles the form submission, performs validation, and triggers the registration API call.
     *
     * Parameters:
     * e: Event object from the form submission.
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(setError(''));

        // Basic validation
        if (!email || !firstName || !lastName || !licenseAccepted) {
            setError('All fields are required');
            return;
        }

        try {
            /**
             * Calling register triggers registration API call
             * Sends email, firstname, lastname to backend using useRegisterMutation
             * .unwrap - if req is successful, get raw data, else, throw error
             */
            const result = await register({
                email,
                firstName,
                lastName,
            }).unwrap();

            if (result.success && result.statusCode === 0) {
                dispatch(setCredentials({ email, firstName, lastName }));
                dispatch(setVerificationCode(result.verificationCode));
                router.push('/auth/verificationpage');
            } else if (result.statusCode === 183) {
                dispatch(
                    setError(
                        'An account with this email already exists. Please login or use a different email.'
                    )
                );
            } else {
                dispatch(
                    setError(
                        result.message ||
                            'Registration failed. Please try again.'
                    )
                );
            }
        } catch (err) {
            console.error('Registration failed:', err);
            dispatch(
                setError(
                    err.data?.message ||
                        'Registration failed. Please try again.'
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

            {/* Signup Form Container */}
            <div className="relative bg-white w-full max-w-2xl mx-auto sm:p-8 rounded-2xl shadow-lg border border-gray-150 m-4">
                {/* Logo */}
                <img
                    src="/e-draw_logo1.png"
                    alt="Edraw Logo"
                    className="w-[120px] h-[120px] mx-auto mb-4 object-cover"
                />

                {/* Signup Form */}
                <form id="signup-form" onSubmit={handleSubmit}>
                    {/* First Name Input */}
                    <NameInput
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First Name*"
                    />

                    {/* Last Name Input */}
                    <NameInput
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last Name*"
                    />

                    {/* Email Input */}
                    <EmailBox
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email*"
                        content="Sign up using your eIFU account"
                        tooltip={false}
                    />

                    <LicenseAgreement
                        checked={licenseAccepted}
                        onChange={(e) => setLicenseAccepted(e.target.checked)}
                    />

                    {error && (
                        <div className="text-red-600 text-sm p-2 bg-red-50 border border-red-100 rounded-lg">
                            {error}
                        </div>
                    )}

                    {/* Submit Button */}
                    {/* <button
                        type="submit"
                        className="w-full mt-3 py-2 bg-red-700 text-white font-semibold rounded-lg hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-600"
                    >
                        {isLoading ? 'Creating Account...' : 'Create Account'}
                    </button> */}
                    <button
                        type="submit"
                        disabled={!isFormValid() || isLoading}
                        className={`w-full mt-3 py-2 text-white font-semibold rounded-lg transition-all duration-200
                    ${
                        isFormValid()
                            ? 'bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-red-600'
                            : 'bg-gray-400 cursor-not-allowed'
                    }`}
                    >
                        {isLoading ? 'Creating Account...' : 'Create Account'}
                    </button>
                </form>

                {/* Link to Login */}
                <p className="mt-4 text-center text-gray-600">
                    Already have an account?{' '}
                    <Link
                        href="/auth/login"
                        className="text-red-700 font-semibold hover:underline"
                    >
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignupPage;
