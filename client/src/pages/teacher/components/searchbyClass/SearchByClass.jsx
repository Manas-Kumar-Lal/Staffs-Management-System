import React from 'react';
import Select from 'react-select';

const classOptions = [
  { value: '1', label: 'Class 1' },
  { value: '2', label: 'Class 2' },
  { value: '3', label: 'Class 3' },
  // Add more classes as needed
];

const sectionOptions = [
  { value: 'A', label: 'Section A' },
  { value: 'B', label: 'Section B' },
  { value: 'C', label: 'Section C' },
  // Add more sections as needed
];

const SearchByClass = () => {
  return (
    <div className='mt-5'>
      <label> Search Students by class and section </label>
      
      <div className="flex flex-col md:flex-row gap-6 mt-3">
        <div>
          <label htmlFor="class" className="block text-sm font-medium text-gray-700">
            Class
          </label>
          <Select
            id="class"
            name="class"
            options={classOptions}
            placeholder="Select Class"
            className="mt-1 block w-40 "
            isSearchable={true}
          />
        </div>

        <div>
          <label htmlFor="section" className="block text-sm font-medium text-gray-700">
            Section
          </label>
          <Select
            id="section"
            name="section"
            options={sectionOptions}
            placeholder="Select Section"
            className="mt-1 block w-40"
            isSearchable={true}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchByClass;
