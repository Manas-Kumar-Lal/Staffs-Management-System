import React from 'react'
import TotalStudentReport from './TotalStudentReport'
import AttendenceReport from './AttendenceReport'

const StudentAndStaffReports = () => {
    return (
        <div className='flex max-[1200px]:flex-col p-4 gap-6'>
            <div className='p-4 w-[40rem] max-[1200px]:w-full overflow-x-auto bg-white' style={{ boxShadow: '0 0 20px rgba(0,0,0,.1)' }}>
                <TotalStudentReport />
            </div>
            <div className='w-full p-4 overflow-x-auto bg-white shadow-lg' style={{ boxShadow: '0 0 20px rgba(0,0,0,.1)' }}>
                <AttendenceReport />
            </div>
        </div>
    )
}

export default StudentAndStaffReports