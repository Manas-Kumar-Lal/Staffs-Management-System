import React from 'react'
import { Route, Routes } from 'react-router-dom'
import StudentInformation from './studentInformation/StudentInformation'
import StudentPromotion from './studentPromotion/StudentPromotion'
import StudentsBirthday from './studentsBirthday/StudentsBirthday'
import StudentTransfer from './studentTransfer/StudentTransfer'

const StudentManagement = () => {
  return (
    <div>
      <Routes>
        <Route path="/student-information" element={<StudentInformation />} />
        <Route path="/student-promotion" element={<StudentPromotion />} />
        <Route path="/students-birthday" element={<StudentsBirthday />} />
        <Route path="/student-transfer" element={<StudentTransfer />} />
      </Routes>
    </div>
  )
}

export default StudentManagement