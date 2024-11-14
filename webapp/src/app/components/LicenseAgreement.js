import React from 'react';

const LicenseAgreement = ({ checked, onChange }) => {
    return (
        <div className="mb-4">
            <div className="flex items-start space-x-2">
                <div className="flex items-center h-5 mt-1">
                    <input
                        id="license"
                        type="checkbox"
                        checked={checked}
                        onChange={onChange}
                        className="w-4 h-4 border-gray-300 rounded text-red-700 focus:ring-red-700"
                        required
                    />
                </div>
                <div className="text-sm">
                    <label
                        htmlFor="license"
                        className="font-medium text-gray-700"
                    >
                        I agree to the{' '}
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                window.open('/eDraw-SLA(2024).pdf', '_blank');
                            }}
                            className="text-red-700 hover:text-red-800 underline font-semibold bg-transparent border-none p-0 cursor-pointer"
                        >
                            License Agreement
                        </button>{' '}
                        and consent to the delivery of all communications.
                    </label>
                    <p className="text-gray-500 mt-1">
                        By checking this box, you acknowledge that you have read
                        and understood the terms and conditions.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LicenseAgreement;
