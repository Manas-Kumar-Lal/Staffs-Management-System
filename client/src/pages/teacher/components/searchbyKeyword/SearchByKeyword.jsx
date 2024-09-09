import React from 'react';
import Select from 'react-select';

const fieldOptions = [
  { value: '1', label: 'Class' },
  { value: '2', label: 'Section' },
  { value: '3', label: 'Student Name' },
];

const SearchByKeyword = () => {
  return (
    <div className="mt-5">
      <label className="block text-lg font-medium text-gray-800 mb-2">Search Students by Keyword</label>
      
      <div className="flex flex-col md:flex-row gap-6 mt-3 items-center">
        
        {/* Select Field Dropdown */}
        <div className="w-full md:w-1/3">
          <label htmlFor="field" className="block text-sm font-medium text-gray-700">
            Select Field
          </label>
          <Select
            id="field"
            name="field"
            options={fieldOptions}
            placeholder="Select Field"
            className="mt-1"
            isSearchable={true}
          />
        </div>

        {/* Keyword Input */}
        <div className="w-full md:w-1/3">
          <label htmlFor="keyword" className="block text-sm font-medium text-gray-700">
            Keyword
          </label>
          <input 
            type="text" 
            id="keyword"
            placeholder="Enter Keyword"
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchByKeyword;
