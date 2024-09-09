import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdmitStudent from './admitStudent/AdmitStudent'

const AdmissionManagement = () => {
  return (
    <div>
      <Routes>
        <Route path="/admit-student" element={<AdmitStudent />} />
      </Routes>
    </div>
  )
}

export default AdmissionManagement