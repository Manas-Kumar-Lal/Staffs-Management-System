import React from 'react';

const TextArea = ({ label = "Label", ...props }) => {
    return (
        <div className='w-full flex flex-col gap-1'>
            <label className="block text-sm font-medium text-gray-700" htmlFor={props?.id}>
                {label}
            </label>
            {/* TextArea field */}
            <textarea
                {...props}
                className="w-full flex-1 rounded-r-md focus:outline-none p-3 resize-none border border-gray-300 rounded-md shadow-sm focus-within:ring-2 focus-within:ring-blue-500"
                rows={4} // Set a default number of rows
            />
        </div>
    );
};

export default TextArea;
