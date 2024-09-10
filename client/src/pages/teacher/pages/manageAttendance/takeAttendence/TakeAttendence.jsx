import React from 'react'
import AttendenceFields from '../components/attendenceFields/AttendenceFields'

const TakeAttendence = () => {
  return (
    <div>
      <AttendenceFields
        showPickerType={'default'}
      />


      <div className="mt-8 flex justify-center">
        <button className="px-6 py-2 bg-indigo-600 text-white text-base sm:text-lg font-semibold rounded-md shadow-md hover:bg-indigo-700">
          Manage Attendence
        </button>
      </div>
    </div>

  )
}

export default TakeAttendence
