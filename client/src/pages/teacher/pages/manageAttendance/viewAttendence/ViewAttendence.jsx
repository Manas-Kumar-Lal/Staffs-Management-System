import React from 'react'
import AttendenceFields from '../components/attendenceFields/AttendenceFields'

const ViewAttendence = () => {
    return (
        <div>
            <AttendenceFields
            showPickerType={'monthYear'}
            />

            <div className="mt-8 flex justify-center">
                <button className="px-6 py-2 bg-indigo-600 text-white text-base sm:text-lg font-semibold rounded-md shadow-md hover:bg-indigo-700">
                    Get Students
                </button>
            </div>
        </div>
    )
}

export default ViewAttendence
