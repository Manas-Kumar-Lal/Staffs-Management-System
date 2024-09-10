import React, { useState } from 'react';
import ViewAttendence from './viewAttendence/ViewAttendence';
import TakeAttendence from './takeAttendence/TakeAttendence';

const ManageAttendance = () => {
  const [activeView, setActiveView] = useState('view');

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        <div className="flex flex-col  justify-center space-x-0 custom-460:space-x-4 py-6">
          <button
            onClick={() => setActiveView('view')}
            className={`px-6 py-3 rounded-lg font-semibold text-lg 
              ${activeView === 'view' ? 'bg-indigo-700 text-white' : 'bg-indigo-100 text-indigo-700'} 
              hover:bg-indigo-500 hover:text-white transition duration-300 ease-in-out`}>
            View Attendance
          </button>
          <button
            onClick={() => setActiveView('take')}
            className={`px-6 py-3 rounded-lg font-semibold text-lg 
              ${activeView === 'take' ? 'bg-indigo-700 text-white' : 'bg-indigo-100 text-indigo-700'} 
              hover:bg-indigo-500 hover:text-white transition duration-300 ease-in-out`}>
            Take Attendance
          </button>
        </div>

        <div className="mt-8">
          {activeView === 'view' && (
            <div className="bg-white shadow-lg rounded-lg p-6 transition-all duration-300 ease-in-out transform">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">View Attendance</h2>
              <ViewAttendence />
            </div>
          )}

          {activeView === 'take' && (
            <div className="bg-white shadow-lg rounded-lg p-6 transition-all duration-300 ease-in-out transform">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Take Attendance</h2>
              <TakeAttendence />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ManageAttendance;
