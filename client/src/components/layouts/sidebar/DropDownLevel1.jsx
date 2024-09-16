import React, { useEffect, useState } from 'react'
import DropDownLevel2 from './DropDownLevel2';
import { FaDotCircle } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const DropDownLevel1 = ({ dropDownIndex, index, items }) => {

    const [dropDownLevel2, setDropDownLevel2] = useState(false);
    const navigate = useNavigate();

    const handleDropDownlLevel2 = (index) => {
        if (dropDownLevel2 === index) setDropDownLevel2(null);
        else setDropDownLevel2(index);
    }

    useEffect(() => {
        if (dropDownLevel2) sessionStorage.setItem('dropDownLevel2', JSON.stringify(dropDownLevel2))
    }, [dropDownLevel2])

    useEffect(() => {
        const sessionValue = JSON.parse(sessionStorage.getItem('dropDownLevel2'))
        setDropDownLevel2(sessionValue)
    }, [])

    return (
        <>
            <div className='overflow-y-hidden'>

                <div className={`flex flex-col overflow-y-hidden transform ${dropDownIndex === index && items ? 'h-full translate-y-0 transition-all duration-300 ease-in-out' : 'h-0 translate-y-[-100%]'
                    }`}>
                    {items?.map((item, subIndex) => {
                        return (
                            <div
                                key={subIndex}
                                className="cursor-pointer"
                                onClick={() => { item?.route && navigate(item?.route) }}
                            >
                                <div
                                    className="text-sm cursor-pointer flex justify-between items-center gap-5 pl-8 pr-5 py-2 hover:bg-white/20"
                                    onClick={() => handleDropDownlLevel2(subIndex)}
                                >
                                    <h2 className='flex items-center gap-3'>
                                        <span><FaDotCircle /></span>
                                        {item?.name}
                                    </h2>
                                    <div className='flex items-center gap-2'>
                                        {item?.subLinks && (
                                            <span className={`${dropDownLevel2 === subIndex && 'rotate-180'} transition-all duration-300`}>▼</span>
                                        )}
                                    </div>
                                </div>
                                <DropDownLevel2
                                    dropDownIndex={dropDownLevel2}
                                    index={subIndex}
                                    items={item?.subLinks}
                                />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default DropDownLevel1