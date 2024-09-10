import React from 'react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {

  const navigate = useNavigate();

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Our School Management System</h2>
        <p className="text-lg text-gray-600 mb-8">Manage your school's activities seamlessly with our comprehensive system.</p>
        <div className='flex items-center justify-center gap-3'>
        <a className="bg-blue-600 text-white px-6 py-3 rounded cursor-pointer hover:bg-blue-700" onClick={() => navigate('/admin/dashboard')}>Admin Panel</a>
        <a className="bg-blue-600 text-white px-6 py-3 rounded cursor-pointer hover:bg-blue-700" onClick={() => navigate('/teacher/dashboard')}>Teacher Panel</a>
      </div>
        </div>
    </section>
  );
};

export default Hero;
