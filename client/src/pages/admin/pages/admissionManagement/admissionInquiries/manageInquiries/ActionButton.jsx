import React from 'react';
import { FaPlus } from 'react-icons/fa';

const ActionButton = ({ children = <p>Label</p>, Icon = <FaPlus />, className, iconBG = "bg-blue-600", ...props }) => {
    return (
        <button
            className={`w-full h-[2rem] flex items-center justify-between gap-2 bg-blue-500 text-white text-sm rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 whitespace-nowrap overflow-hidden group ${className}`}
            {...props}
        >
            <span className='px-3'>{children}</span>
            <span className={`h-full px-1 flex items-center justify-center ${iconBG} group-hover:bg-blue-700 transition-all duration-200`}>{Icon}</span>
        </button>
    );
};

export default ActionButton;
