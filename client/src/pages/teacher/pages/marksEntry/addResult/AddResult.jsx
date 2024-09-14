import React from 'react';
import AddSubjectMarks from '../addSubjectMarks/AddSubjectMarks';

const AddResult = () => {
    const students = [
        {
            id: 1,
            name: 'John Doe',
            admissionNumber: 'A001',
            type: 'Regular',
            class: '10',
            section: 'A',
            rollNumber: '15',
            status: 'Active',
        },
    ];

    return (
        <div className="p-5">
            {/* Exam Name */}
            <h1 className="text-3xl font-bold mb-4">Exam: Annual Examination 2024</h1>

            {/* Student Details */}
            <div className="mb-5 p-5 bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-3">Student Details</h2>
                {students.map((student) => (
                    <div key={student.id}>
                        <p><strong>Student Name:</strong> {student.name}</p>
                        <p><strong>Admission Number:</strong> {student.admissionNumber}</p>
                        <p><strong>Class:</strong> {student.class}</p>
                        <p><strong>Section:</strong> {student.section}</p>
                        <p><strong>Roll Number:</strong> {student.rollNumber}</p>
                    </div>
                ))}
            </div>

            <AddSubjectMarks />
        </div>
    );
};

export default AddResult;
