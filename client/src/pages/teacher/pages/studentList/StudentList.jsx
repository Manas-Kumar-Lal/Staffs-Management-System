import React, { useState } from 'react';
import StudentDetails from './StudentDetails';
import PrimaryButton from '../../../../components/utilities/buttons/primaryButton/PrimaryButton'
import SearchByKeyword from '../../components/searchStudent/SearchByKeyword';
import SearchByClass from '../../components/searchStudent/SearchByClass';

const StudentList = () => {
  const [selectedOption, setSelectedOption] = useState('keyword');

  return (
    <div>
      <h1 className="py-4 w-full bg-[lightseagreen] text-center text-2xl sm:text-3xl font-bold text-white rounded-md shadow-md">
        Students
      </h1>

      <div className="mt-8 bg-white p-6 sm:p-8 rounded-md" style={{boxShadow:'0 0 15px rgba(0,0,0,.1)'}}>
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
          <PrimaryButton className={'max-w-fit'}>
            Get Students
          </PrimaryButton>
        </div>
      </div>

      <div className="mt-8">
        <StudentDetails />
      </div>
    </div>
  );
}

export default StudentList;
