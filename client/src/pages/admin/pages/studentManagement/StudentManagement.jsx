import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StudentInformation from './studentInformation/StudentInformation'

const StudentManagement = () => {
  return (
    <div>
      <Routes>
        <Route path="/student-information" element={<StudentInformation />} />
      </Routes>
    </div>
  )
}

export default StudentManagement