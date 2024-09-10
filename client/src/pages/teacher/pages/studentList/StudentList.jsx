import React, { useState } from 'react';
import SearchByClass from './components/SearchByClass';
import SearchByKeyword from './components/SearchByKeyword';
import StudentDetails from './components/StudentDeails';

const StudentList = () => {
  const [selectedOption, setSelectedOption] = useState('keyword');

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <h1 className="py-4 w-full bg-indigo-600 text-center text-2xl sm:text-3xl font-bold text-white rounded-md shadow-md">
        Students
      </h1>

      <div className="mt-8 bg-white p-6 sm:p-8 rounded-md shadow-lg">
        <label className="block text-lg font-semibold text-gray-700 mb-4">
          Search Students
        </label>

        <div className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
          <label className="flex items-center mb-3 sm:mb-0">
            <input
              type="radio"
              name="selectoption"
              value="keyword"
              checked={selectedOption === 'keyword'}
              onChange={() => setSelectedOption('keyword')}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2 text-gray-700">Search by Keyword</span>
          </label>

          <label className="flex items-center ml-0 sm:ml-10">
            <input
              type="radio"
              name="selectoption"
              value="class"
              checked={selectedOption === 'class'}
              onChange={() => setSelectedOption('class')}
              className="form-radio text-indigo-600 h-4 w-4"
            />
            <span className="ml-2 text-gray-700">Search by Class</span>
          </label>
        </div>

        <div className="mt-4">
          {selectedOption === 'keyword' ? <SearchByKeyword /> : <SearchByClass />}
        </div>

        <div className="mt-8 flex justify-center">
          <button className="px-6 py-2 bg-indigo-600 text-white text-base sm:text-lg font-semibold rounded-md shadow-md hover:bg-indigo-700">
            Get Students
          </button>
        </div>
      </div>

      <div className="mt-8">
        <StudentDetails />
      </div>
    </div>
  );
}

export default StudentList;
