import React from 'react';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold">School Management System</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:text-gray-200">Home</a></li>
            <li><a href="#" className="hover:text-gray-200">About</a></li>
            <li><a href="#" className="hover:text-gray-200">Features</a></li>
            <li><a href="#" className="hover:text-gray-200">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
