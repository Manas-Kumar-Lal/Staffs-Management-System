import React from 'react';
import { FaMale } from "react-icons/fa";

const StudentCountCard = ({ details }) => {

    return (
        <div className="w-full min-w-[17rem] h-fit rounded-lg overflow-hidden text-white flex items-stretch self-end" style={{ backgroundColor: details?.color }}>

            <div className='flex items-center justify-center text-4xl p-4' style={{ backgroundColor: details?.colorShift }}>
                <FaMale />
            </div>

            <div className='w-full flex flex-col py-1 px-4'>
                <div className="flex items-center justify-between">
                    <span>{details?.keyHeading}</span>
                </div>
                <div className="font-semibold">{details?.keyValue}</div>
                <div className="w-full bg-white bg-opacity-30 rounded-full h-1">
                    <div
                        className="bg-white h-full rounded-full"
                        style={{ width: `${23}%` }}
                    ></div>
                </div>
                <div className="flex items-center">
                    {details?.description}
                </div>
            </div>
        </div>
    );
};

export default StudentCountCard;