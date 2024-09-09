import './Sidebar.css'
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import DropDownLevel1 from './DropDownLevel1';
import { MdDashboard } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";

const Sidebar = ({ sidebarJSON, Authority = "Admin", sideBarToggle, setSideBarToggle }) => {

    const navigate = useNavigate();
    const [dropDownLevel1, setDropDownLevel1] = useState(false);

    const handleDropDownlLevel1 = (index) => {
        if (dropDownLevel1 === index) setDropDownLevel1(null);
        else setDropDownLevel1(index);
    }

    return (
        <div className={`Sidebar overflow-y-auto bg-[#076a65] text-white w-[18rem] h-screen space-y-2 select-none py-3 z-[100] ${sideBarToggle ? 'max-[750px]:-translate-x-0' : 'max-[750px]:-translate-x-full'} max-[750px]:fixed top-0 left-0 transition-all duration-200`} >

            <div className='w-full flex items-center justify-between pl-3 pr-2 min-[750px]:pr-5'>
                <img className='h-[3rem] rounded-full' src="https://marketplace.canva.com/EAFuPD7aEBw/3/0/1600w/canva-simple-flat-illustrative-badge-logo-zAxYE1kEeFQ.jpg" alt="" />
                <div className='flex items-center gap-3'>
                    <h1 className='font-semibold'>Welcome {Authority}..!</h1>
                    <RiMenu3Fill onClick={() => setSideBarToggle(false)} className='text-4xl hover:bg-[#159e97] active:scale-[0.9] p-2 rounded-full transition-all duration-100 cursor-pointer min-[750px]:hidden' />
                </div>
            </div>


            <div className='flex flex-col'>

                {
                    sidebarJSON?.map((menu, index) => {
                        return (
                            <div key={index}>
                                <div
                                    className="text-sm cursor-pointer flex justify-between items-center gap-5 px-4 py-2 hover:bg-black/30 transition-all duration-100"
                                    onClick={() => { handleDropDownlLevel1(index); menu?.route && navigate(menu?.route) }}
                                >
                                    <h1 className='flex items-center gap-3'>
                                        <span><MdDashboard /></span>
                                        {menu?.name}
                                    </h1>
                                    <div className='flex items-center gap-2'>
                                        {menu?.subLinks && (
                                            <span className={`${dropDownLevel1 === index && 'rotate-180'} transition-all duration-300`}>▼</span>
                                        )}
                                    </div>
                                </div>
                                <DropDownLevel1
                                    dropDownIndex={dropDownLevel1}
                                    index={index}
                                    items={menu?.subLinks}
                                />
                            </div>
                        )
                    })
                }

            </div>
        </div>
    );
};

export default Sidebar;
