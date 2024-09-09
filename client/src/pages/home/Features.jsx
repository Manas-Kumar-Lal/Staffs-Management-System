import React from 'react';

const Features = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Student Management</h3>
            <p className="text-gray-600">Efficiently manage student records, attendance, grades, and more.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Teacher Management</h3>
            <p className="text-gray-600">Organize teacher profiles, timetables, and performance reports.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Course Management</h3>
            <p className="text-gray-600">Manage courses, assignments, and class schedules with ease.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
