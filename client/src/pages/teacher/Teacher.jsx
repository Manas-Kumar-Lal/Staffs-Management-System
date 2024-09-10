import React, { useState } from 'react'
import Sidebar from '../../components/layouts/sidebar/Sidebar'
import { TeacherSidebarJSON } from './components/sidebar/TeacherSideBarJson'
import { Route, Routes } from 'react-router-dom';
import { RiMenu3Fill } from "react-icons/ri";
import TeacherDashboard from './pages/teacherDashboard/TeacherDashboard';
import StudentList from './pages/studentList/StudentList';
import ManageAttendance from './pages/manageAttendance/ManageAttendance';

const Teacher = () => {
    const [sideBarToggle, setSideBarToggle] = useState(false);

    return (
        <div className="flex h-screen">

            <div className='min-[750px]:hidden z-[100] fixed top-3 left-3 bg-gray-200 hover:bg-gray-300 active:scale-[0.9] transition-all duration-100 text-gray-600 text-3xl p-3 rounded-full cursor-pointer' style={{ boxShadow: '0 0 10px rgba(0,0,0,0.3)' }} onClick={() => setSideBarToggle(true)}>
                <RiMenu3Fill />
            </div>

            <div className="h-full">
                <Sidebar
                    sidebarJSON={TeacherSidebarJSON}
                    Authority='Teacher'
                    sideBarToggle={sideBarToggle}
                    setSideBarToggle={setSideBarToggle}
                />
            </div>

            <div className="flex-1 overflow-y-auto p-4">
                <Routes>
                    <Route path="/dashboard" element={<TeacherDashboard />} />
                    <Route path="/student-list" element={<StudentList />} />
                    <Route path="/student-attendence" element={<ManageAttendance />} />
                </Routes>
            </div>
        </div>
    );
};

export default Teacher

