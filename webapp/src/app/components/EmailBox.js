import React from 'react';
import { MailIcon, InformationCircleIcon } from '@heroicons/react/solid';
import Tooltip from './Tooltip';

function EmailBox({
    value,
    onChange,
    placeholder = 'Email*',
    content,
    tooltip,
}) {
    return (
        <div className="relative mb-4">
            {/* Icon */}
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* <MailIcon className="h-5 w-5 text-red-700" /> */}
            </div>

            {/* Input Field */}
            <input
                type="email"
                className="w-full pl-10 pr-16 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 border-gray-300"
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                style={{ fontSize: '14px' }}
                required
            />

            {/* Tooltip */}
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                {tooltip && (
                    <Tooltip content={content} position="right">
                        <button
                            type="button"
                            className="focus:outline-none"
                            aria-label="Email information"
                        >
                            <div className="h-5 w-5 text-red-700">
                                {/* <InformationCircleIcon className="h-5 w-5 text-red-700" /> */}
                            </div>
                        </button>
                    </Tooltip>
                )}
            </div>
        </div>
    );
}

export default EmailBox;
