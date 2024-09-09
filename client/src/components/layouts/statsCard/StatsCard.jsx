import React from 'react';

const StatsCard = ({ bgColor, iconBgColor, icon, count, title }) => {
    return (

        <div

            className={`relative bg-gradient-to-br ${bgColor} rounded-xl p-6 pb-16 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-transform duration-300`}
        >
            <div className='flex justify-between items-center'>
                <div className='space-y-2'>
                    <p className='text-4xl font-extrabold text-white'>{count}</p>
                    <p className='text-lg font-semibold text-white opacity-80'>{title}</p>
                </div>
                <div className={`flex items-center justify-center text-3xl w-fit p-3 text-white ${iconBgColor} rounded-full shadow-md`}>
                    {icon}
                </div>
            </div>
            <div className={`absolute bottom-4 left-6 right-6 py-2 text-center bg-opacity-20 bg-black text-white cursor-pointer rounded-lg transition-colors hover:bg-opacity-40`}>
                More Info
            </div>
        </div>

    );
};

export default StatsCard;
