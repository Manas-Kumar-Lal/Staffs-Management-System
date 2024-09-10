import React from 'react';

const StudentDetails = () => {
  const students = [
    {
      id: 1,
      name: 'John Doe',
      admissionNumber: 'A001',
      type: 'Regular',
      phone: '123-456-7890',
      email: 'john@example.com',
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
      phone: '987-654-3210',
      email: 'jane@example.com',
      class: '10',
      section: 'B',
      rollNumber: '12',
      status: 'Active',
    },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">List of Students</h1>

      <div className="overflow-x-auto" style={{boxShadow:'0 0 15px rgba(0,0,0,.1)'}}>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">
                <input type="checkbox" />
              </th>
              <th className="py-2 px-4 border-b text-left">Student Name</th>
              <th className="py-2 px-4 border-b text-left">Admission Number</th>
              <th className="py-2 px-4 border-b text-left">Type</th>
              <th className="py-2 px-4 border-b text-left">Phone</th>
              <th className="py-2 px-4 border-b text-left">Email</th>
              <th className="py-2 px-4 border-b text-left">Class</th>
              <th className="py-2 px-4 border-b text-left">Section</th>
              <th className="py-2 px-4 border-b text-left">Roll Number</th>
              <th className="py-2 px-4 border-b text-left">Status</th>
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
                <td className="py-2 px-4 border-b">{student.phone}</td>
                <td className="py-2 px-4 border-b">{student.email}</td>
                <td className="py-2 px-4 border-b">{student.class}</td>
                <td className="py-2 px-4 border-b">{student.section}</td>
                <td className="py-2 px-4 border-b">{student.rollNumber}</td>
                <td className="py-2 px-4 border-b">{student.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StudentDetails;
