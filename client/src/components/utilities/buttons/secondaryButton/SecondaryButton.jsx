import React from 'react';
import { FaPlus } from 'react-icons/fa';

const SecondaryButton = ({ children = <p>Label</p>, Icon = <FaPlus />, className = "bg-[#3B82F6]", iconBG = "bg-blue-600", ...props }) => {
    return (
        <button
            className={`w-full h-[2rem] flex items-center justify-between gap-2 text-white text-sm rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 whitespace-nowrap overflow-hidden group ${className}`}
            {...props}
        >
            <span className='px-3'>{children}</span>
            <span className={`h-full px-2 flex items-center justify-center ${iconBG} group-hover:bg-blue-700 transition-all duration-200`}>{Icon}</span>
        </button>
    );
};

export default SecondaryButton;
