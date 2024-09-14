import React, { useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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

const AttendenceByMonth = ({showPickerType}) => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className='mt-5'>
      <label className="text-lg font-medium">Attendence By Month</label>

      <div className="flex flex-col md:flex-row gap-6 mt-3">
        <div className="w-full md:w-1/2 lg:w-1/4">
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

        <div className="w-full md:w-1/2 lg:w-1/4">
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

        <div className="w-full md:w-1/2 lg:w-1/4">
          <label htmlFor="date" className="block text-sm font-medium text-gray-700">
            Date
          </label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat={showPickerType === 'monthYear' ? "MM/yyyy" : "dd/MM/yyyy"}
            placeholderText="Select Date"
            className="mt-1 block w-full border border-gray-300 p-2 rounded"
            showMonthYearPicker={showPickerType === 'monthYear'}
          />

        </div>
      </div>
    </div>
  );
}

export default AttendenceByMonth;
