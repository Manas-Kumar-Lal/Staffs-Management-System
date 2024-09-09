import React, { useState } from 'react';
import Sidebar from '../../components/layouts/sidebar/Sidebar';
import { adminSidebarJSON } from './components/sidebar/adminSidebarJSON';
import AdminDashboard from './pages/adminDashboard/AdminDashboard';
import { Route, Routes } from 'react-router-dom';
import { RiMenu3Fill } from "react-icons/ri";
import AdmissionManagement from './pages/admissionManagement/AdmissionManagement';

const Admin = () => {

    const [sideBarToggle, setSideBarToggle] = useState(false);

    return (
        <div className="flex h-screen">

            <div className='min-[750px]:hidden z-[100] fixed top-3 left-3 bg-gray-200 hover:bg-gray-300 active:scale-[0.9] transition-all duration-100 text-gray-600 text-3xl p-3 rounded-full cursor-pointer' style={{ boxShadow: '0 0 10px rgba(0,0,0,0.3)' }} onClick={() => setSideBarToggle(true)}>
                <RiMenu3Fill />
            </div>

            <div className="h-full">
                <Sidebar
                    sidebarJSON={adminSidebarJSON}
                    Authority='Admin'
                    sideBarToggle={sideBarToggle}
                    setSideBarToggle={setSideBarToggle}
                />
            </div>

            <div className="flex-1 overflow-y-auto p-4">
                <Routes>
                    <Route path="/dashboard" element={<AdminDashboard />} />
                    <Route path="/dashboard" element={<AdminDashboard />} />
                    <Route path="/admission-management/*" element={<AdmissionManagement />} />
                </Routes>
            </div>
        </div>
    );
};

export default Admin;
