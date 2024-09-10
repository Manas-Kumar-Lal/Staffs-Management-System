import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdmitStudent from './admitStudent/AdmitStudent'
import AdmissionRequests from './admissionRequests/AdmissionRequests'
import ManageInquiries from './admissionInquiries/manageInquiries/ManageInquiries'

const AdmissionManagement = () => {
  return (
    <div>
      <Routes>
        <Route path="/admit-student" element={<AdmitStudent />} />
        <Route path="/admission-requests" element={<AdmissionRequests />} />
        <Route path="/manage-inquiries" element={<ManageInquiries />} />
      </Routes>
    </div>
  )
}

export default AdmissionManagement