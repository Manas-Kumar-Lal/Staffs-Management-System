import React from 'react';
import { useNavigate } from 'react-router-dom';

const StudentListMarksEntry = () => {
  const navigate = useNavigate();

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
    {
      id: 2,
      name: 'Jane Smith',
      admissionNumber: 'A002',
      type: 'Regular',
      class: '10',
      section: 'B',
      rollNumber: '12',
      status: 'Active',
    },
  ];

  const handleAddResultClick = (studentId) => {
    navigate(`/teacher/add-result`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">List of Students</h1>

      <div className="overflow-x-auto" style={{ boxShadow: '0 0 15px rgba(0,0,0,.1)' }}>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">
                <input type="checkbox" />
              </th>
              <th className="py-2 px-4 border-b text-left">Student Name</th>
              <th className="py-2 px-4 border-b text-left">Admission Number</th>
              <th className="py-2 px-4 border-b text-left">Type</th>
              <th className="py-2 px-4 border-b text-left">Class</th>
              <th className="py-2 px-4 border-b text-left">Section</th>
              <th className="py-2 px-4 border-b text-left">Roll Number</th>
              <th className="py-2 px-4 border-b text-left">Status</th>
              <th className="py-2 px-4 border-b text-left">Result</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.id}>
                <td className="py-2 px-4 border-b text-center">
                  <input type="checkbox" />
                </td>
                <td className="py-2 px-4 border-b">{student.name}</td>
                <td className="py-2 px-4 border-b">{student.admissionNumber}</td>
                <td className="py-2 px-4 border-b">{student.type}</td>
                <td className="py-2 px-4 border-b">{student.class}</td>
                <td className="py-2 px-4 border-b">{student.section}</td>
                <td className="py-2 px-4 border-b">{student.rollNumber}</td>
                <td className="py-2 px-4 border-b">{student.status}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
                    onClick={() => handleAddResultClick(student.id)}
                  >
                    Add Result
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentListMarksEntry;
