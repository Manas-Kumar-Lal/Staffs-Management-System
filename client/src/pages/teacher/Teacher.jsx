import React, { useState } from 'react';
import Sidebar from '../../components/layouts/sidebar/Sidebar';
import { TeacherSidebarJSON } from './components/sidebar/TeacherSideBarJson';
import { Route, Routes } from 'react-router-dom';
import { RiMenu3Fill } from "react-icons/ri";
import TeacherDashboard from './pages/teacherDashboard/TeacherDashboard';
import ManageAttendance from './pages/manageAttendance/ManageAttendance';
import MarksEntry from './pages/marksEntry/MarksEntry';
import AddResult from './pages/marksEntry/addResult/AddResult';
import StudentStudyMaterial from './pages/studentStudyMaterial/StudentStudyMaterial';
import AddStudyMaterial from './pages/studentStudyMaterial/AddStudyMaterial/AddStudyMaterial';
import Notification from './pages/notification/Notification';
import CallList from './pages/callList/CallList';
import CallListDetails from './pages/callList/CallListDetails';

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
                    Authority='Executive'
                    sideBarToggle={sideBarToggle}
                    setSideBarToggle={setSideBarToggle}
                />
            </div>

            <div className="flex-1 overflow-y-auto p-4">
                <Routes>
                    <Route path="/dashboard" element={<TeacherDashboard />} />
                    <Route path="/call-list" element={<CallList />} />
                    <Route path="/call-list-details/:id" element={<CallListDetails />} />
                    <Route path="/student-attendence" element={<ManageAttendance />} />
                    <Route path='/student-markentry' element={<MarksEntry />} />
                    <Route path="/add-result" element={<AddResult />} />
                    <Route path="/student-study-material" element={<StudentStudyMaterial />} />
                    <Route path="/add-study-material" element={<AddStudyMaterial />} />
                    <Route path="/notification" element={<Notification />} />
                </Routes>
            </div>
        </div>
    );
};

export default Teacher;
