import React, { useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { LockClosedIcon, CheckCircleIcon } from '@heroicons/react/solid';
import { useGetPasswordRequirementsQuery } from '../redux/api/authApi';

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
    const [validationState, setValidationState] = useState({});

    // Fetch password requirements
    const {
        data: requirementsData,
        isLoading,
        error,
    } = useGetPasswordRequirementsQuery();
    const requirements = requirementsData?.Requirements;

    // Update validation when value or requirements change
    useEffect(() => {
        if (requirements && value) {
            const validation = {
                hasLength: value.length >= requirements.MinLength,
                hasUppercase:
                    (value.match(/[A-Z]/g) || []).length >=
                    requirements.MinUpperCase,
                hasLowercase:
                    (value.match(/[a-z]/g) || []).length >=
                    requirements.MinLowerCase,
                hasDigits:
                    (value.match(/\d/g) || []).length >= requirements.MinDigits,
                hasSpecial:
                    (value.match(/[^A-Za-z0-9\s]/g) || []).length >=
                    requirements.MinSpecial,
            };

            // Complete validation using API's RegEx
            validation.meetsAllRequirements = requirements.RegEx
                ? new RegExp(requirements.RegEx).test(value)
                : Object.values(validation).every(Boolean);

            setValidationState(validation);
        }
    }, [value, requirements]);

    const passwordsMatch = isConfirmation ? value === primaryPassword : false;

    const showCheckIcon =
        !hideCheck &&
        ((isConfirmation && passwordsMatch && value.length > 0) ||
            (!isConfirmation && validationState.meetsAllRequirements));

    const getBorderClass = () => {
        if (isFocused) {
            return showCheckIcon
                ? 'border-green-500 ring-2 ring-green-500'
                : 'border-red-600 ring-2 ring-red-600';
        }
        return 'border-gray-300';
    };

    const RequirementIndicator = ({ met, text }) => (
        <div className="flex items-center space-x-2">
            <div
                className={`w-1 h-1 rounded-full ${
                    met ? 'bg-green-500' : 'bg-gray-300'
                }`}
            />
            <span
                className={`text-xs ${
                    met ? 'text-green-500' : 'text-gray-500'
                }`}
            >
                {text}
            </span>
        </div>
    );

    return (
        <div>
            <div className="relative">
                {/* Lock Icon */}
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockClosedIcon className="h-6 w-6 text-red-700" />
                </div>

                {/* Input Field */}
                <input
                    type={showPassword ? 'text' : 'password'}
                    className={`w-full pl-10 pr-16 py-2 border rounded-lg outline-none transition-colors
                        ${getBorderClass()}`}
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    style={{ fontSize: '15px' }}
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
                    {isLoading && (
                        <span className="text-gray-500">
                            Loading requirements...
                        </span>
                    )}

                    {error && (
                        <span className="text-red-500">
                            Failed to load requirements
                        </span>
                    )}

                    {requirements && (
                        <>
                            <RequirementIndicator
                                met={validationState.hasLength}
                                text={`At least ${requirements.MinLength} characters`}
                            />
                            <RequirementIndicator
                                met={validationState.hasUppercase}
                                text={`At least ${requirements.MinUpperCase} uppercase letter`}
                            />
                            <RequirementIndicator
                                met={validationState.hasLowercase}
                                text={`At least ${requirements.MinLowerCase} lowercase letter`}
                            />
                            <RequirementIndicator
                                met={validationState.hasDigits}
                                text={`At least ${requirements.MinDigits} number`}
                            />
                            <RequirementIndicator
                                met={validationState.hasSpecial}
                                text={`At least ${requirements.MinSpecial} special character`}
                            />
                        </>
                    )}
                </div>
            )}
        </div>
    );
}

export default PasswordBox;
