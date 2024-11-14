import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { LockClosedIcon, CheckCircleIcon } from '@heroicons/react/solid';

function PasswordBox({
    value,
    onChange,
    placeholder = 'Password*',
    isConfirmation = false,
    primaryPassword = '',
    showRequirements = false,
    hideCheck = false,
}) {
    const [showPassword, setShowPassword] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    // Password validation checks
    const hasLength = value.length >= 8;
    const hasUppercase = /[A-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const meetsAllRequirements = hasLength && hasUppercase && hasNumber;
    const passwordsMatch = isConfirmation ? value === primaryPassword : false;

    const showCheckIcon =
        !hideCheck &&
        ((isConfirmation && passwordsMatch && value.length > 0) ||
            (!isConfirmation && meetsAllRequirements));

    const getBorderClass = () => {
        if (isFocused) {
            return showCheckIcon
                ? 'border-green-500 ring-2 ring-green-500'
                : 'border-red-600 ring-2 ring-red-600';
        }
        return 'border-gray-300';
    };

    return (
        <div>
            <div className="relative">
                {/* Lock Icon */}
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {/* <LockClosedIcon className="h-5 w-5 text-red-700" /> */}
                </div>

                {/* Input Field */}
                <input
                    type={showPassword ? 'text' : 'password'}
                    className={`w-full pl-10 pr-16 py-1 border rounded-lg outline-none transition-colors
                        ${getBorderClass()}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    style={{ fontSize: '14px' }}
                    required
                />

                {/* Right-side Icons Container */}
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center space-x-2">
                    {/* Check Icon */}
                    {showCheckIcon && (
                        <CheckCircleIcon className="h-4 w-4 text-green-500" />
                    )}

                    {/* Show/Hide Password Icon */}
                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="text-gray-400 hover:text-gray-600 focus:outline-none"
                    >
                        {showPassword ? (
                            <FaEyeSlash className="h-5 w-5" />
                        ) : (
                            <FaEye className="h-5 w-5" />
                        )}
                    </button>
                </div>
            </div>

            {/* Password Requirements */}
            {showRequirements && (
                <div className="mt-2 space-y-1 text-sm">
                    <div className="flex items-center space-x-2">
                        <div
                            className={`w-1 h-1 rounded-full ${hasLength ? 'bg-green-500' : 'bg-gray-300'}`}
                        />
                        <span
                            className={`text-xs ${hasLength ? 'text-green-500' : 'text-gray-500'}`}
                        >
                            At least 8 characters
                        </span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div
                            className={`w-1 h-1 rounded-full ${hasUppercase ? 'bg-green-500' : 'bg-gray-300'}`}
                        />
                        <span
                            className={`text-xs ${hasUppercase ? 'text-green-500' : 'text-gray-500'}`}
                        >
                            At least 1 uppercase letter
                        </span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div
                            className={`w-1 h-1 rounded-full ${hasNumber ? 'bg-green-500' : 'bg-gray-300'}`}
                        />
                        <span
                            className={`text-xs ${hasNumber ? 'text-green-500' : 'text-gray-500'}`}
                        >
                            At least 1 number
                        </span>
                    </div>
                </div>
            )}
        </div>
    );
}

export default PasswordBox;
