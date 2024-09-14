import React from 'react';
import Select from 'react-select';

const classOptions = [
  { value: '1', label: 'Class 1' },
  { value: '2', label: 'Class 2' },
  { value: '3', label: 'Class 3' },
];

const sectionOptions = [
  { value: 'A', label: 'Section A' },
  { value: 'B', label: 'Section B' },
  { value: 'C', label: 'Section C' },
];

const SearchByClass = () => {
  return (
    <div className='mt-5'>
      <label className="text-lg font-medium"> Search Students by Class and Section </label>
      
      <div className="flex flex-col md:flex-row gap-6 mt-3">
        <div className="w-full md:w-1/2 lg:w-1/3">
          <label htmlFor="class" className="block text-sm font-medium text-gray-700">
            Class
          </label>
          <Select
            id="class"
            name="class"
            options={classOptions}
            placeholder="Select Class"
            className="mt-1 block w-full"
            isSearchable={true}
          />
        </div>

        <div className="w-full md:w-1/2 lg:w-1/3">
          <label htmlFor="section" className="block text-sm font-medium text-gray-700">
            Section
          </label>
          <Select
            id="section"
            name="section"
            options={sectionOptions}
            placeholder="Select Section"
            className="mt-1 block w-full"
            isSearchable={true}
          />
        </div>
      </div>
    </div>
  );
}

export default SearchByClass;
