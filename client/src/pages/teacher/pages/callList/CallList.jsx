import React from 'react';

// Simulating call data
const callData = [
  { id: 1, phoneNumber: '123-456-7890', status: 'Active' },
  { id: 2, phoneNumber: '987-654-3210', status: 'Completed' },
  { id: 3, phoneNumber: '555-123-4567', status: 'On Hold' },
  { id: 4, phoneNumber: '444-234-5678', status: 'Pending' },
  { id: 5, phoneNumber: '333-345-6789', status: 'Disconnected' },
];

// Status colors map
const statusColors = {
  Active: 'text-green-500',
  Completed: 'text-gray-500',
  'On Hold': 'text-orange-500',
  Pending: 'text-blue-500',
  Disconnected: 'text-red-500',
};

const CallList = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-semibold text-center mb-6">Call Service Dashboard</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Call ID</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Phone Number</th>
              <th className="px-4 py-2 text-left font-semibold text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody>
            {callData.map((call) => (
              
               <tr key={call.id} className="border-t cursor-pointer hover:bg-slate-100">
                <td className="px-4 py-2 text-gray-600">{call.id}</td>
                <td className="px-4 py-2 text-gray-600">{call.phoneNumber}</td>
                <td className={`px-4 py-2 font-semibold ${statusColors[call.status]}`}>
                  {call.status}
                </td>
              </tr>
             
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CallList;
