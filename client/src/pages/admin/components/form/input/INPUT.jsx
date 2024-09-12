import React from 'react';
import { FaUserGraduate } from 'react-icons/fa'; // Import the icon you want to use

const INPUT = ({ Icon = <FaUserGraduate />, label = "Label", ...props }) => {

    return (
        <div className='w-full flex flex-col gap-1'>
            <label className="block text-sm font-medium text-gray-700" htmlFor={props?.id}>
                {label}
            </label>
            <div className="h-[3rem] flex items-center border border-gray-300 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-blue-500">
                {/* Icon container */}
                <span className="h-full flex items-center justify-center px-3 bg-gray-100 rounded-l-md">
                    <Icon className="text-gray-400" />
                </span>
                {/* Input field */}
                <input
                    {...props}
                    className="w-full flex-1 border-none rounded-r-md focus:outline-none px-3"
                />
            </div>
        </div>
    );
};

export default INPUT;
