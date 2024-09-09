import React from 'react'

const StudentAdmissionCard = ({ name, date, imgSrc }) => {
    
    return (
        <div className="flex items-center bg-white rounded-lg shadow-lg p-4">
            <img src={imgSrc} alt={name} className="w-12 h-12 rounded-full mr-4" />
            <div>
                <h3 className="text-lg font-semibold">{name}</h3>
                <p className="text-sm text-gray-500">Date of Admission: {date}</p>
            </div>
        </div>
    )
}

export default StudentAdmissionCard
