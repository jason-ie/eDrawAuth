import React from 'react';
import { UserIcon } from '@heroicons/react/solid';

const NameInput = ({ value, onChange, placeholder }) => (
    <div className="relative mb-4">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {/* <UserIcon className="h-5 w-5 text-red-700" /> */}
        </div>
        <input
            type="text"
            className="w-full pl-10 pr-3 py-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            style={{ fontSize: '14px' }}
            required
        />
    </div>
);

export default NameInput;
