import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AdmitStudent from './admitStudent/AdmitStudent'
import AdmissionRequests from './admissionRequests/AdmissionRequests'
import ManageInquiries from './admissionInquiries/manageInquiries/ManageInquiries'
import SendSmsToInquiries from './admissionInquiries/sendSmsToInquiries/SendSmsToInquiries'
import PrintAdmissionForms from './printAdmissionForms/PrintAdmissionForms'
import AdmitBulkStudents from './admitBulkStudents/AdmitBulkStudents'

const AdmissionManagement = () => {
  return (
    <div>
      <Routes>
        <Route path="/admit-student" element={<AdmitStudent />} />
        <Route path="/admit-bulk-students" element={<AdmitBulkStudents />} />
        <Route path="/admission-requests" element={<AdmissionRequests />} />
        <Route path="/manage-inquiries" element={<ManageInquiries />} />
        <Route path="/send-sms-to-inquiries" element={<SendSmsToInquiries />} />
        <Route path="/print-admission-forms" element={<PrintAdmissionForms />} />
      </Routes>
    </div>
  )
}

export default AdmissionManagement