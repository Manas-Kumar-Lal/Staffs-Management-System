import React from 'react';
import { FaPlus } from 'react-icons/fa';

const PrimaryButton = ({ children = <p>Label</p>, Icon = FaPlus, className, ...props }) => {
    return (
        <button
            className={`w-full flex items-center justify-center px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 ${className}`}
            {...props}
        >
            {Icon && <Icon className="mr-2" />}
            <span>{children}</span>
        </button>
    );
};

export default PrimaryButton;
