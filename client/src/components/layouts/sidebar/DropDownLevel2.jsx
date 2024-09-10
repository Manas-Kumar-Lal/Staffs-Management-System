import React from 'react'
import { GoDot } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

const DropDownLevel2 = ({ dropDownIndex, index, items }) => {

    const navigate = useNavigate();

    return (
        <>
            <div className='overflow-y-hidden'>

                <div className={`flex flex-col overflow-y-hidden transform ${dropDownIndex === index && items ? 'h-full translate-y-0 transition-all duration-300 ease-in-out' : 'h-0 translate-y-[-100%]'
                    }`}>
                    {items?.map((item, index) => {
                        return (
                            <div onClick={() => { item?.route && navigate(item?.route) }} key={index} className="cursor-pointer">
                                <div
                                    className="text-sm cursor-pointer flex justify-between items-center gap-5 pl-12 py-2 hover:bg-gray-300/30"
                                >
                                    <h2 className='flex items-center gap-3'>
                                        <span><GoDot /></span>
                                        {item?.name}
                                    </h2>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default DropDownLevel2